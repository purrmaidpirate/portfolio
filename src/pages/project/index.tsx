import { Link, Navigate, useParams } from "react-router-dom";
import { PageTransition } from "~/src/components/page-transition";
import { categories, projects } from "~/src/data/projects";
import styles from "./style.module.css";

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const idx = projects.indexOf(project);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  const hasSections = project.sections && project.sections.length > 0;

  if (project.visualOnly) {
    return (
      <PageTransition>
        <main className={styles.project}>
          <div className={styles.visualMedia}>
            {project.images.map((img, i) => (
              <div key={i} className={styles.visualMediaCell}>
                {img.videoSrc ? (
                  <video
                    src={img.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.visualMediaItem}
                  />
                ) : (
                  <img
                    src={img.url}
                    alt={img.alt}
                    className={styles.visualMediaItem}
                  />
                )}
              </div>
            ))}
          </div>
          <nav className={styles.projectNav}>
            {prev ? (
              <Link to={`/work/${prev.slug}`} className={styles.navPrev}>
                <span className={styles.navLabel}>Previous</span>
                <span className={styles.navTitle}>{prev.title}</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/work/${next.slug}`} className={styles.navNext}>
                <span className={styles.navLabel}>Next</span>
                <span className={styles.navTitle}>{next.title}</span>
              </Link>
            ) : <div />}
          </nav>
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className={styles.project}>
        {/* Painting hero — centered, portrait */}
        <div className={styles.hero}>
          <img
            src={project.thumbnail.url}
            alt={project.thumbnail.alt}
            width={project.thumbnail.width}
            height={project.thumbnail.height}
            className={styles.heroImage}
          />
        </div>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <span className={styles.categoryLabel}>
              {categories.find((c) => c.value === project.category)?.label}
            </span>
            <span className={styles.yearLabel}>{project.year}</span>
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
        </header>

        {/* Meta */}
        <div className={styles.infoRow}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Client</span>
            <span className={styles.infoValue}>{project.client}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Role</span>
            <span className={styles.infoValue}>{project.role}</span>
          </div>
        </div>

        {/* Description — intro only when sections present, full text otherwise */}
        <div className={styles.description}>
          {hasSections ? (
            <p>{project.description.split("\n\n")[0]}</p>
          ) : (
            project.description
              .split("\n\n")
              .map((para, i) => <p key={i}>{para}</p>)
          )}
        </div>

        {/* Full-width footer image */}
        {project.footerImage && (
          <div className={styles.footerImage}>
            <img
              src={project.footerImage.url}
              alt={project.footerImage.alt}
              width={project.footerImage.width}
              height={project.footerImage.height}
              loading="lazy"
            />
          </div>
        )}

        {/* Narrative sections */}
        {hasSections ? (
          <div className={styles.sections}>
            {project.sections!.map((section, i) => (
              <div
                key={i}
                className={`${styles.section} ${
                  section.imagePosition === "left" ? styles.sectionFlipped : ""
                }`}
              >
                <div className={styles.sectionText}>
                  {section.heading && (
                    <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  )}
                  <p className={styles.sectionBody}>{section.body}</p>
                </div>
                {section.videos && section.videos.length > 0 ? (
                  <div className={styles.sectionImageGrid}>
                    {section.videos.map((src, j) => (
                      <video
                        key={j}
                        src={src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={styles.sectionImage}
                      />
                    ))}
                  </div>
                ) : section.images && section.images.length > 0 ? (
                  <div className={styles.sectionImageGrid}>
                    {section.images.map((img, j) => (
                      <img
                        key={j}
                        src={img.url}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        loading="lazy"
                        className={styles.sectionImage}
                      />
                    ))}
                  </div>
                ) : section.image ? (
                  <img
                    src={section.image.url}
                    alt={section.image.alt}
                    width={section.image.width}
                    height={section.image.height}
                    loading="lazy"
                    className={styles.sectionImage}
                  />
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          /* Gallery fallback for projects without sections */
          <div className={styles.gallery}>
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                className={styles.galleryImage}
              />
            ))}
          </div>
        )}

        {/* Final video */}
        {project.video && (
          <div className={styles.videoWrap}>
            <video
              src={project.video}
              controls
              playsInline
              className={styles.video}
            />
          </div>
        )}

        {/* Prev / Next */}
        <nav className={styles.projectNav}>
          {prev ? (
            <Link to={`/work/${prev.slug}`} className={styles.navPrev}>
              <span className={styles.navLabel}>Previous</span>
              <span className={styles.navTitle}>{prev.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link to={`/work/${next.slug}`} className={styles.navNext}>
              <span className={styles.navLabel}>Next</span>
              <span className={styles.navTitle}>{next.title}</span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </main>
    </PageTransition>
  );
}
