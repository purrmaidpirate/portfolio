import type * as THREE from "three";

export type MediaItem = {
  url?: string;
  width: number;
  height: number;
  slug?: string;
  label?: string;   // optional text to render inside the card
  icon?: string;    // optional image URL to render inside the card
  videoSrc?: string; // optional video URL to render as live texture
};

export type InfiniteCanvasProps = {
  media: MediaItem[];
  onTextureProgress?: (progress: number) => void;
  onPlaneClick?: (slug: string) => void;
  showFps?: boolean;
  showControls?: boolean;
  cameraFov?: number;
  cameraNear?: number;
  cameraFar?: number;
  fogNear?: number;
  fogFar?: number;
  backgroundColor?: string;
  fogColor?: string;
};

export type ChunkData = {
  key: string;
  cx: number;
  cy: number;
  cz: number;
};

export type PlaneData = {
  id: string;
  position: THREE.Vector3;
  scale: THREE.Vector3;
  mediaIndex: number;
};
