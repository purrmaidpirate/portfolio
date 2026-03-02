import * as React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "~/src/data/projects";
import { InfiniteCanvas } from "~/src/infinite-canvas";
import type { MediaItem } from "~/src/infinite-canvas/types";
import { PageLoader } from "~/src/loader";
import styles from "./style.module.css";

const media: MediaItem[] = projects.map((p) => ({
  width: p.thumbnail.width,
  height: p.thumbnail.height,
  slug: p.slug,
  // label: p.title,  // uncomment to show project title inside the card
  // icon: p.thumbnail.url,  // uncomment to show thumbnail image inside the card
}));

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
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="mailto:hello@ranjani.com" aria-label="Email">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
          <span className={styles.footerDivider}>|</span>
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
