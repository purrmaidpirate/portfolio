import * as React from "react";
import { Link } from "react-router-dom";
import { PageTransition } from "~/src/components/page-transition";
import { categories, projects } from "~/src/data/projects";
import type { ProjectCategory } from "~/src/data/types";
import styles from "./style.module.css";

export function WorkPage() {
  const [activeFilter, setActiveFilter] = React.useState<ProjectCategory | "all">("all");

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <PageTransition>
      <main className={styles.work}>
        <h1 className={styles.heading}>Work</h1>

        <div className={styles.filters}>
          <button
            type="button"
            className={activeFilter === "all" ? styles.filterActive : styles.filter}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.value}
              className={activeFilter === cat.value ? styles.filterActive : styles.filter}
              onClick={() => setActiveFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((project, index) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className={`${styles.card} ${index % 2 === 0 ? styles.cardLeft : styles.cardRight}`}
            >
              <span className={styles.cardNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={styles.cardImage}>
                <img
                  src={project.thumbnail.url}
                  alt={project.thumbnail.alt}
                  width={project.thumbnail.width}
                  height={project.thumbnail.height}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <span className={styles.cardCategory}>
                  {categories.find((c) => c.value === project.category)?.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </PageTransition>
  );
}
