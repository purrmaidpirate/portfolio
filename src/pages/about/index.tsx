import { PageTransition } from "~/src/components/page-transition";
import styles from "./style.module.css";

const skills = [
  "Blender",
  "Cinema 4D",
  "After Effects",
  "Spark AR",
  "Unity",
  "Three.js",
  "TouchDesigner",
  "Figma",
  "Marvelous Designer",
  "Projection Mapping",
  "Arduino",
  "p5.js",
];

export function AboutPage() {
  return (
    <PageTransition>
      <main className={styles.about}>
        <div className={styles.top}>
          <section className={styles.intro}>
            <h1 className={styles.heading}>About</h1>
            <p className={styles.bio}>
              I'm a 3D / visual / motion designer and creative technologist focused on building interactive and immersive
              experiences through projection mapping, AR/XR and real-time media.
            </p>
            <p className={styles.bio}>
              I'm interested in game mechanics as a way to communicate complex ideas through play and I work with real time
              systems to make those ideas tangible in space.
            </p>
          </section>
          <div className={styles.portrait}>
            <div className={styles.portraitPlaceholder}>
              <span className={styles.portraitLabel}>Your photo here</span>
            </div>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.entry}>
              <strong>NYU ITP</strong>
              <span className={styles.entryMeta}>Masters — Currently Pursuing</span>
            </div>

            <h2 className={styles.sectionTitle}>Experience</h2>
            <div className={styles.entry}>
              <strong>Flipkart Camera</strong>
              <span className={styles.entryMeta}>3D / AR Designer</span>
            </div>
            <div className={styles.entry}>
              <strong>Ampersand Communications</strong>
              <span className={styles.entryMeta}>3D Designer</span>
            </div>
            <div className={styles.entry}>
              <strong>New Folder Design</strong>
              <span className={styles.entryMeta}>3D Animator</span>
            </div>
          </div>

          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>Tools</h2>
            <div className={styles.skillTags}>
              {skills.map((skill) => (
                <span key={skill} className={styles.tag}>
                  {skill}
                </span>
              ))}
            </div>

            <h2 className={styles.sectionTitle}>Contact</h2>
            <ul className={styles.contactList}>
              <li>
                <a href="mailto:ranjani.ranj@gmail.com">ranjani.ranj@gmail.com</a>
              </li>
              <li>
                <a href="https://linkedin.com/in/ranjani-ramakrishnan" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
