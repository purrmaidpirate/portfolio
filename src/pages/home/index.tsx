import * as React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "~/src/data/projects";
import { InfiniteCanvas } from "~/src/infinite-canvas";
import type { MediaItem } from "~/src/infinite-canvas/types";
import { PageLoader } from "~/src/loader";
import styles from "./style.module.css";

const media: MediaItem[] = projects.flatMap((p) => {
  const imgs = p.images.length > 0 ? p.images : [p.thumbnail];
  return imgs.map((img) => ({
    width: img.width,
    height: img.height,
    slug: p.slug,
    label: p.title,
    icon: img.url,
    videoSrc: img.videoSrc,
  }));
});

export function HomePage() {
  const navigate = useNavigate();
  const [textureProgress, setTextureProgress] = React.useState(100);

  const handlePlaneClick = React.useCallback(
    (slug: string) => {
      navigate(`/work/${slug}`);
    },
    [navigate],
  );

  return (
    <>
      <PageLoader progress={textureProgress} />
      <div className={styles.hero}>
        <h1 className={styles.name}>Ranjani Ramakrishnan</h1>
        <p className={styles.role}>Creative Technologist & Designer</p>
      </div>
      <div className={styles.footer}>
        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className={styles.footerCta}>
          Schedule a call &rarr;
        </a>
        <div className={styles.footerRight}>
          <a href="https://github.com/edoardolunardi/infinite-canvas" target="_blank" rel="noopener noreferrer" className={styles.footerCredit}>
            Credits
          </a>
        </div>
      </div>
      <InfiniteCanvas
        media={media}
        onTextureProgress={setTextureProgress}
        onPlaneClick={handlePlaneClick}
        backgroundColor="#fafafa"
        fogColor="#fafafa"
      />
    </>
  );
}
