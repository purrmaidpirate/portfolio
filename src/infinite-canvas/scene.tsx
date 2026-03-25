import { KeyboardControls, Stats, useKeyboardControls, useProgress } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";
import { useIsTouchDevice } from "~/src/use-is-touch-device";
import { clamp, lerp } from "~/src/utils";
import {
  CHUNK_FADE_MARGIN,
  CHUNK_OFFSETS,
  CHUNK_SIZE,
  DEPTH_FADE_END,
  DEPTH_FADE_START,
  INITIAL_CAMERA_Z,
  INVIS_THRESHOLD,
  KEYBOARD_SPEED,
  MAX_VELOCITY,
  RENDER_DISTANCE,
  VELOCITY_DECAY,
  VELOCITY_LERP,
} from "./constants";
import { interactionState } from "./interaction-state";
import styles from "./style.module.css";
import type { ChunkData, InfiniteCanvasProps, MediaItem, PlaneData } from "./types";
import { generateChunkPlanesCached, getChunkUpdateThrottleMs, shouldThrottleUpdate } from "./utils";

const PLANE_GEOMETRY = new THREE.PlaneGeometry(1, 1);

type ContentRect = { x: number; y: number; w: number; h: number };

// Draws Mac OS System 1-6 style window chrome onto a canvas context.
// Returns the inner content area rect where image/video should be drawn.
function drawMacFrame(ctx: CanvasRenderingContext2D, res: number, canvasH: number, label: string): ContentRect {
  const border = 2;
  const titleH = Math.round(res * 0.064); // ~33px at 512

  // White background
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, res, canvasH);

  // Title bar: exactly 6 stripes centered vertically (Mac style)
  const stripeCount = 6;
  const stripeStep = 2; // 1px black + 1px gap
  const stripesH = stripeCount * stripeStep - 1;
  const stripesStartY = border + Math.round((titleH - stripesH) / 2);
  ctx.fillStyle = "#000";
  for (let i = 0; i < stripeCount; i++) {
    ctx.fillRect(border, stripesStartY + i * stripeStep, res - border * 2, 1);
  }

  // Close box (left of title bar)
  const boxPad = Math.round(titleH * 0.18);
  const boxSize = titleH - boxPad * 2;
  ctx.fillStyle = "#fff";
  ctx.fillRect(border + boxPad, border + boxPad, boxSize, boxSize);
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 1;
  ctx.strokeRect(border + boxPad + 0.5, border + boxPad + 0.5, boxSize - 1, boxSize - 1);

  // Title text — white background rect, then text centered in bar
  const fontSize = Math.round(titleH * 0.52);
  ctx.font = `bold ${fontSize}px "ChiKareGo", monospace`;
  const maxLen = Math.floor((res * 0.52) / Math.max(fontSize * 0.62, 1));
  const displayLabel = label.length > maxLen ? `${label.slice(0, maxLen - 1)}…` : label;
  const textW = ctx.measureText(displayLabel).width;
  const hPad = Math.round(res * 0.02);
  const whiteL = Math.round((res - textW) / 2) - hPad;
  ctx.fillStyle = "#fff";
  ctx.fillRect(whiteL, border, textW + hPad * 2, titleH);
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(displayLabel, res / 2, border + titleH / 2);

  // Title bar bottom divider
  ctx.fillStyle = "#000";
  ctx.fillRect(border, border + titleH, res - border * 2, 1);

  // Content area bounds (full width, no scrollbar)
  const contentTopY = border + titleH + 1;
  const contentBotY = canvasH - border;

  // Outer border (drawn last so it's always on top)
  ctx.strokeStyle = "#000";
  ctx.lineWidth = border;
  ctx.strokeRect(border / 2, border / 2, res - border, canvasH - border);

  return { x: border, y: contentTopY, w: res - border * 2, h: contentBotY - contentTopY };
}

function drawImageIntoRect(ctx: CanvasRenderingContext2D, img: HTMLImageElement | HTMLVideoElement, cr: ContentRect, naturalW: number, naturalH: number) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(cr.x, cr.y, cr.w, cr.h);
  ctx.clip();
  const scale = Math.max(cr.w / naturalW, cr.h / naturalH);
  const dw = naturalW * scale;
  const dh = naturalH * scale;
  ctx.drawImage(img, cr.x + (cr.w - dw) / 2, cr.y + (cr.h - dh) / 2, dw, dh);
  ctx.restore();
}

const KEYBOARD_MAP = [
  { name: "forward", keys: ["w", "W", "ArrowUp"] },
  { name: "backward", keys: ["s", "S", "ArrowDown"] },
  { name: "left", keys: ["a", "A", "ArrowLeft"] },
  { name: "right", keys: ["d", "D", "ArrowRight"] },
  { name: "up", keys: ["e", "E"] },
  { name: "down", keys: ["q", "Q"] },
];

type KeyboardKeys = {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
};

const getTouchDistance = (touches: Touch[]) => {
  if (touches.length < 2) {
    return 0;
  }

  const [t1, t2] = touches;
  const dx = t1.clientX - t2.clientX;
  const dy = t1.clientY - t2.clientY;
  return Math.sqrt(dx * dx + dy * dy);
};

type CameraGridState = {
  cx: number;
  cy: number;
  cz: number;
  camZ: number;
};

function MediaPlane({
  position,
  scale,
  media,
  chunkCx,
  chunkCy,
  chunkCz,
  cameraGridRef,
  onPlaneClick,
}: {
  position: THREE.Vector3;
  scale: THREE.Vector3;
  media: MediaItem;
  chunkCx: number;
  chunkCy: number;
  chunkCz: number;
  cameraGridRef: React.RefObject<CameraGridState>;
  onPlaneClick?: (slug: string) => void;
}) {
  const meshRef = React.useRef<THREE.Mesh>(null);
  const materialRef = React.useRef<THREE.MeshBasicMaterial>(null);
  const localState = React.useRef({ opacity: 0, frame: 0 });

  // Refs for animated content
  const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const lastVideoTimeRef = React.useRef(-1);
  const imageRef = React.useRef<HTMLImageElement | null>(null);
  const isGifRef = React.useRef(false);
  const lastGifFrameTime = React.useRef(0);

  // Stable render order based on world position — prevents Three.js from re-sorting
  // transparent planes by camera distance every frame (which causes flicker on drift)
  const stableRenderOrder = React.useMemo(() => {
    const hash = Math.abs(Math.round(position.x * 47.3 + position.y * 53.9 + position.z * 59.1));
    return hash % 100000;
  }, [position]);

  const isAnimated = Boolean(media.videoSrc) || Boolean(media.icon?.toLowerCase().endsWith(".gif"));

  // Build the Mac-framed CanvasTexture once per card (aspect ratio / label change).
  // Content rect is stored in tex.userData.cr — avoids side-effects in useMemo.
  const texture = React.useMemo(() => {
    const res = 512;
    const canvasH = Math.round(res * (media.height / media.width));
    const canvas = document.createElement("canvas");
    canvas.width = res;
    canvas.height = canvasH;
    const ctx = canvas.getContext("2d")!;
    const cr = drawMacFrame(ctx, res, canvasH, media.label ?? "Untitled");
    const tex = new THREE.CanvasTexture(canvas);
    tex.userData.cr = cr as ContentRect;
    // For animated cards (video/GIF), skip mipmap generation (costly to regenerate each frame)
    if (isAnimated) {
      tex.minFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
    }
    return tex;
  }, [media.width, media.height, media.label, isAnimated]);

  // Cache the 2D context so useFrame doesn't call getContext() every tick
  React.useEffect(() => {
    ctxRef.current = (texture.image as HTMLCanvasElement).getContext("2d");
  }, [texture]);

  // Load static image (or GIF) into content rect
  React.useEffect(() => {
    if (!media.icon || media.videoSrc) return;

    // Derive ctx and cr from the texture itself — always in sync, no stale refs
    const canvas = texture.image as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    const cr = texture.userData.cr as ContentRect | undefined;
    if (!ctx || !cr) return;

    const isGif = media.icon.toLowerCase().endsWith(".gif");
    isGifRef.current = isGif;
    imageRef.current = null;

    const img = new Image();
    // crossOrigin needed for cross-origin images so the canvas stays origin-clean for WebGL
    if (!media.icon.startsWith("/")) img.crossOrigin = "anonymous";
    img.onload = () => {
      if (isGif) {
        // Attach off-screen (NO opacity:0 — browsers pause GIF animation on invisible elements)
        img.style.cssText = "position:fixed;left:-9999px;top:-9999px;width:1px;height:1px;pointer-events:none;";
        document.body.appendChild(img);
        imageRef.current = img;
        lastGifFrameTime.current = 0;
      }
      drawImageIntoRect(ctx, img, cr, img.naturalWidth, img.naturalHeight);
      texture.needsUpdate = true;
    };
    img.src = media.icon;

    return () => {
      if (img.parentNode) img.parentNode.removeChild(img);
      imageRef.current = null;
      isGifRef.current = false;
    };
  }, [media.icon, media.videoSrc, texture]);

  // Set up / tear down video element
  React.useEffect(() => {
    lastVideoTimeRef.current = -1;
    if (!media.videoSrc) {
      videoRef.current = null;
      return;
    }
    const video = document.createElement("video");
    video.src = media.videoSrc;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.play().catch(() => {});
    videoRef.current = video;
    return () => {
      video.pause();
      video.src = "";
      videoRef.current = null;
    };
  }, [media.videoSrc]);

  useFrame(() => {
    const material = materialRef.current;
    const mesh = meshRef.current;
    const state = localState.current;

    if (!material || !mesh) {
      return;
    }

    const cam = cameraGridRef.current;
    const dist = Math.max(Math.abs(chunkCx - cam.cx), Math.abs(chunkCy - cam.cy), Math.abs(chunkCz - cam.cz));
    const absDepth = Math.abs(position.z - cam.camZ);

    if (absDepth > DEPTH_FADE_END + 50) {
      state.opacity = 0;
      material.opacity = 0;
      material.depthWrite = false;
      mesh.visible = false;
      return;
    }

    const gridFade =
      dist <= RENDER_DISTANCE ? 1 : Math.max(0, 1 - (dist - RENDER_DISTANCE) / Math.max(CHUNK_FADE_MARGIN, 0.0001));

    const depthFade =
      absDepth <= DEPTH_FADE_START
        ? 1
        : Math.max(0, 1 - (absDepth - DEPTH_FADE_START) / Math.max(DEPTH_FADE_END - DEPTH_FADE_START, 0.0001));

    const target = Math.min(gridFade, depthFade * depthFade);

    state.opacity = target < INVIS_THRESHOLD && state.opacity < INVIS_THRESHOLD ? 0 : lerp(state.opacity, target, 0.18);

    const isFullyOpaque = state.opacity > 0.99;
    // Move opaque planes out of Three.js's transparent sort pass — this prevents
    // the renderer from re-sorting every frame as the camera drifts, which is
    // the primary cause of flickering when the mouse moves.
    material.transparent = !isFullyOpaque;
    material.opacity = isFullyOpaque ? 1 : state.opacity;
    material.depthWrite = isFullyOpaque;
    mesh.visible = state.opacity > INVIS_THRESHOLD;

    // Use cached ctx ref (set once per texture in useEffect, never re-computed per frame)
    const ctx = ctxRef.current;
    const cr = texture.userData.cr as ContentRect | undefined;

    // Composite video frame — only when a new frame is available
    const video = videoRef.current;
    if (mesh.visible && video && ctx && cr && video.readyState >= 2 && video.currentTime !== lastVideoTimeRef.current) {
      lastVideoTimeRef.current = video.currentTime;
      drawImageIntoRect(ctx, video, cr, video.videoWidth, video.videoHeight);
      texture.needsUpdate = true;
    }

    // Composite animated GIF frame — throttled to ~20fps
    const gifImg = imageRef.current;
    if (mesh.visible && isGifRef.current && gifImg && ctx && cr) {
      const now = performance.now();
      if (now - lastGifFrameTime.current > 50) {
        lastGifFrameTime.current = now;
        drawImageIntoRect(ctx, gifImg, cr, gifImg.naturalWidth, gifImg.naturalHeight);
        texture.needsUpdate = true;
      }
    }
  });

  const handleClick = React.useCallback(
    (e: { stopPropagation: () => void }) => {
      if (media.slug && onPlaneClick && !interactionState.wasDragging) {
        e.stopPropagation();
        onPlaneClick(media.slug);
      }
    },
    [media.slug, onPlaneClick],
  );

  const handlePointerOver = React.useCallback(() => {
    if (media.slug && onPlaneClick) {
      document.body.style.setProperty("cursor", "url('/cursor-click.png') 0 0, pointer", "important");
    }
  }, [media.slug, onPlaneClick]);

  const handlePointerOut = React.useCallback(() => {
    document.body.style.removeProperty("cursor");
  }, []);

  const displayScale = React.useMemo(() => {
    const aspect = media.width / media.height;
    return new THREE.Vector3(scale.y * aspect, scale.y, 1);
  }, [media.width, media.height, scale]);

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={displayScale}
      visible={false}
      renderOrder={stableRenderOrder}
      geometry={PLANE_GEOMETRY}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <meshBasicMaterial ref={materialRef} map={texture} transparent opacity={0} side={THREE.DoubleSide} />
    </mesh>
  );
}

function Chunk({
  cx,
  cy,
  cz,
  media,
  cameraGridRef,
  onPlaneClick,
}: {
  cx: number;
  cy: number;
  cz: number;
  media: MediaItem[];
  cameraGridRef: React.RefObject<CameraGridState>;
  onPlaneClick?: (slug: string) => void;
}) {
  const [planes, setPlanes] = React.useState<PlaneData[] | null>(null);

  React.useEffect(() => {
    let canceled = false;
    const run = () => !canceled && setPlanes(generateChunkPlanesCached(cx, cy, cz));

    if (typeof requestIdleCallback !== "undefined") {
      const id = requestIdleCallback(run, { timeout: 100 });

      return () => {
        canceled = true;
        cancelIdleCallback(id);
      };
    }

    const id = setTimeout(run, 0);
    return () => {
      canceled = true;
      clearTimeout(id);
    };
  }, [cx, cy, cz]);

  if (!planes) {
    return null;
  }

  return (
    <group>
      {planes.map((plane) => {
        const mediaItem = media[plane.mediaIndex % media.length];

        if (!mediaItem) {
          return null;
        }

        return (
          <MediaPlane
            key={plane.id}
            position={plane.position}
            scale={plane.scale}
            media={mediaItem}
            chunkCx={cx}
            chunkCy={cy}
            chunkCz={cz}
            cameraGridRef={cameraGridRef}
            onPlaneClick={onPlaneClick}
          />
        );
      })}
    </group>
  );
}

type ControllerState = {
  velocity: { x: number; y: number; z: number };
  targetVel: { x: number; y: number; z: number };
  basePos: { x: number; y: number; z: number };
  drift: { x: number; y: number };
  mouse: { x: number; y: number };
  lastMouse: { x: number; y: number };
  scrollAccum: number;
  isDragging: boolean;
  lastTouches: Touch[];
  lastTouchDist: number;
  lastChunkKey: string;
  lastChunkUpdate: number;
  pendingChunk: { cx: number; cy: number; cz: number } | null;
};

const createInitialState = (camZ: number): ControllerState => ({
  velocity: { x: 0, y: 0, z: 0 },
  targetVel: { x: 0, y: 0, z: 0 },
  basePos: { x: 0, y: 0, z: camZ },
  drift: { x: 0, y: 0 },
  mouse: { x: 0, y: 0 },
  lastMouse: { x: 0, y: 0 },
  scrollAccum: 0,
  isDragging: false,
  lastTouches: [],
  lastTouchDist: 0,
  lastChunkKey: "",
  lastChunkUpdate: 0,
  pendingChunk: null,
});

function SceneController({ media, onTextureProgress, onPlaneClick }: { media: MediaItem[]; onTextureProgress?: (progress: number) => void; onPlaneClick?: (slug: string) => void }) {
  const { camera, gl } = useThree();
  const isTouchDevice = useIsTouchDevice();
  const [, getKeys] = useKeyboardControls<keyof KeyboardKeys>();

  const state = React.useRef<ControllerState>(createInitialState(INITIAL_CAMERA_Z));
  const cameraGridRef = React.useRef<CameraGridState>({ cx: 0, cy: 0, cz: 0, camZ: camera.position.z });

  const [chunks, setChunks] = React.useState<ChunkData[]>([]);

  const { progress } = useProgress();
  const maxProgress = React.useRef(0);

  React.useEffect(() => {
    const rounded = Math.round(progress);

    if (rounded > maxProgress.current) {
      maxProgress.current = rounded;
      onTextureProgress?.(rounded);
    }
  }, [progress, onTextureProgress]);

  React.useEffect(() => {
    const canvas = gl.domElement;
    const s = state.current;
    const setDragging = (active: boolean) => {
      document.documentElement.classList.toggle("dragging", active);
    };

    const onMouseDown = (e: MouseEvent) => {
      // Just start dragging - keep drift frozen at current value
      s.isDragging = true;
      s.lastMouse = { x: e.clientX, y: e.clientY };
      interactionState.dragDistance = 0;
      interactionState.wasDragging = false;
      setDragging(true);
    };

    const onMouseUp = () => {
      interactionState.wasDragging = interactionState.dragDistance > 5;
      s.isDragging = false;
      setDragging(false);
    };

    const onMouseLeave = () => {
      s.mouse = { x: 0, y: 0 };
      s.isDragging = false;
      setDragging(false);
    };

    const onMouseMove = (e: MouseEvent) => {
      s.mouse = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };

      if (s.isDragging) {
        interactionState.dragDistance += Math.abs(e.clientX - s.lastMouse.x) + Math.abs(e.clientY - s.lastMouse.y);
        s.targetVel.x -= (e.clientX - s.lastMouse.x) * 0.025;
        s.targetVel.y += (e.clientY - s.lastMouse.y) * 0.025;
        s.lastMouse = { x: e.clientX, y: e.clientY };
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      s.scrollAccum += e.deltaY * 0.006;
    };

    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      s.lastTouches = Array.from(e.touches) as Touch[];
      s.lastTouchDist = getTouchDistance(s.lastTouches);
      setDragging(true);
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touches = Array.from(e.touches) as Touch[];

      if (touches.length === 1 && s.lastTouches.length >= 1) {
        const [touch] = touches;
        const [last] = s.lastTouches;

        if (touch && last) {
          s.targetVel.x -= (touch.clientX - last.clientX) * 0.02;
          s.targetVel.y += (touch.clientY - last.clientY) * 0.02;
        }
      } else if (touches.length === 2 && s.lastTouchDist > 0) {
        const dist = getTouchDistance(touches);
        s.scrollAccum += (s.lastTouchDist - dist) * 0.006;
        s.lastTouchDist = dist;
      }

      s.lastTouches = touches;
    };

    const onTouchEnd = (e: TouchEvent) => {
      s.lastTouches = Array.from(e.touches) as Touch[];
      s.lastTouchDist = getTouchDistance(s.lastTouches);
      setDragging(false);
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("wheel", onWheel, { passive: false });
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd, { passive: false });

    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, [gl]);

  useFrame(() => {
    const s = state.current;
    const now = performance.now();

    const { forward, backward, left, right, up, down } = getKeys();
    if (forward) s.targetVel.z -= KEYBOARD_SPEED;
    if (backward) s.targetVel.z += KEYBOARD_SPEED;
    if (left) s.targetVel.x -= KEYBOARD_SPEED;
    if (right) s.targetVel.x += KEYBOARD_SPEED;
    if (down) s.targetVel.y -= KEYBOARD_SPEED;
    if (up) s.targetVel.y += KEYBOARD_SPEED;

    const isZooming = Math.abs(s.velocity.z) > 0.05;
    const zoomFactor = clamp(s.basePos.z / 50, 0.3, 2.0);
    const driftAmount = 8.0 * zoomFactor;
    const driftLerp = isZooming ? 0.2 : 0.12;

    if (s.isDragging) {
      // Freeze drift during drag - keep it at current value
    } else if (isTouchDevice) {
      s.drift.x = lerp(s.drift.x, 0, driftLerp);
      s.drift.y = lerp(s.drift.y, 0, driftLerp);
    } else {
      s.drift.x = lerp(s.drift.x, s.mouse.x * driftAmount, driftLerp);
      s.drift.y = lerp(s.drift.y, s.mouse.y * driftAmount, driftLerp);
    }

    s.targetVel.z += s.scrollAccum;
    s.scrollAccum *= 0.8;

    s.targetVel.x = clamp(s.targetVel.x, -MAX_VELOCITY, MAX_VELOCITY);
    s.targetVel.y = clamp(s.targetVel.y, -MAX_VELOCITY, MAX_VELOCITY);
    s.targetVel.z = clamp(s.targetVel.z, -MAX_VELOCITY, MAX_VELOCITY);

    s.velocity.x = lerp(s.velocity.x, s.targetVel.x, VELOCITY_LERP);
    s.velocity.y = lerp(s.velocity.y, s.targetVel.y, VELOCITY_LERP);
    s.velocity.z = lerp(s.velocity.z, s.targetVel.z, VELOCITY_LERP);

    s.basePos.x += s.velocity.x;
    s.basePos.y += s.velocity.y;
    s.basePos.z += s.velocity.z;

    camera.position.set(s.basePos.x + s.drift.x, s.basePos.y + s.drift.y, s.basePos.z);

    s.targetVel.x *= VELOCITY_DECAY;
    s.targetVel.y *= VELOCITY_DECAY;
    s.targetVel.z *= VELOCITY_DECAY;

    const cx = Math.floor(s.basePos.x / CHUNK_SIZE);
    const cy = Math.floor(s.basePos.y / CHUNK_SIZE);
    const cz = Math.floor(s.basePos.z / CHUNK_SIZE);

    cameraGridRef.current = { cx, cy, cz, camZ: s.basePos.z };

    const key = `${cx},${cy},${cz}`;
    if (key !== s.lastChunkKey) {
      s.pendingChunk = { cx, cy, cz };
      s.lastChunkKey = key;
    }

    const throttleMs = getChunkUpdateThrottleMs(isZooming, Math.abs(s.velocity.z));

    if (s.pendingChunk && shouldThrottleUpdate(s.lastChunkUpdate, throttleMs, now)) {
      const { cx: ucx, cy: ucy, cz: ucz } = s.pendingChunk;
      s.pendingChunk = null;
      s.lastChunkUpdate = now;

      setChunks(
        CHUNK_OFFSETS.map((o) => ({
          key: `${ucx + o.dx},${ucy + o.dy},${ucz + o.dz}`,
          cx: ucx + o.dx,
          cy: ucy + o.dy,
          cz: ucz + o.dz,
        }))
      );
    }
  });

  React.useEffect(() => {
    const s = state.current;
    s.basePos = { x: camera.position.x, y: camera.position.y, z: camera.position.z };

    setChunks(
      CHUNK_OFFSETS.map((o) => ({
        key: `${o.dx},${o.dy},${o.dz}`,
        cx: o.dx,
        cy: o.dy,
        cz: o.dz,
      }))
    );
  }, [camera]);

  return (
    <>
      {chunks.map((chunk) => (
        <Chunk key={chunk.key} cx={chunk.cx} cy={chunk.cy} cz={chunk.cz} media={media} cameraGridRef={cameraGridRef} onPlaneClick={onPlaneClick} />
      ))}
    </>
  );
}

export function InfiniteCanvasScene({
  media,
  onTextureProgress,
  onPlaneClick,
  showFps = false,
  showControls = false,
  cameraFov = 60,
  cameraNear = 1,
  cameraFar = 500,
  fogNear = 120,
  fogFar = 320,
  backgroundColor: _backgroundColor = "#ffffff",
  fogColor = "#ffffff",
}: InfiniteCanvasProps) {
  const isTouchDevice = useIsTouchDevice();
  const dpr = Math.min(window.devicePixelRatio || 1, isTouchDevice ? 1.25 : 1.5);

  if (!media.length) {
    return null;
  }

  return (
    <KeyboardControls map={KEYBOARD_MAP}>
      <div className={styles.container}>
        <Canvas
          camera={{ position: [0, 0, INITIAL_CAMERA_Z], fov: cameraFov, near: cameraNear, far: cameraFar }}
          dpr={dpr}
          flat
          gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
          className={styles.canvas}
        >
          <fog attach="fog" args={[fogColor, fogNear, fogFar]} />
          <SceneController media={media} onTextureProgress={onTextureProgress} onPlaneClick={onPlaneClick} />
          {showFps && <Stats className={styles.stats} />}
        </Canvas>

        {showControls && (
          <div className={styles.controlsPanel}>
            {isTouchDevice ? (
              <>
                <b>Drag</b> Pan · <b>Pinch</b> Zoom
              </>
            ) : (
              <>
                <b>WASD</b> Move · <b>QE</b> Up/Down · <b>Scroll/Space</b> Zoom
              </>
            )}
          </div>
        )}
      </div>
    </KeyboardControls>
  );
}
