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

  return (
    <PageTransition>
      <main className={styles.project}>
        {/* Full-width hero */}
        <div className={styles.hero}>
          <img
            src={project.images[0]?.url ?? project.thumbnail.url}
            alt={project.images[0]?.alt ?? project.thumbnail.alt}
            className={styles.heroImage}
          />
        </div>

        {/* Compact header: title + minimal meta inline */}
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

        {/* Brief info row */}
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

        {/* Short description — just the first paragraph */}
        <div className={styles.description}>
          <p>{project.description.split("\n\n")[0]}</p>
        </div>

        {/* Image gallery — the main focus */}
        <div className={styles.gallery}>
          {/* Thumbnail as second image */}
          <img
            src={project.thumbnail.url}
            alt={project.thumbnail.alt}
            width={project.thumbnail.width}
            height={project.thumbnail.height}
            loading="lazy"
            className={styles.galleryImage}
          />
          {/* Additional gallery images */}
          {project.images.slice(1).map((img, i) => (
            <img
              key={`img-${i}`}
              src={img.url}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading="lazy"
              className={styles.galleryImage}
            />
          ))}
        </div>

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
