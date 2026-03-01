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
                {section.image && (
                  <img
                    src={section.image.url}
                    alt={section.image.alt}
                    width={section.image.width}
                    height={section.image.height}
                    loading="lazy"
                    className={styles.sectionImage}
                  />
                )}
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
