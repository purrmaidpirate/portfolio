import { PageTransition } from "~/src/components/page-transition";
import styles from "./style.module.css";

const tools = [
  "Blender 3D",
  "TouchDesigner",
  "Unity",
  "Unreal Engine",
  "MadMapper",
  "Substance Painter",
  "Marvelous Designer",
  "Fusion 360",
  "Nomad Sculpt",
  "Lens Studio",
  "Arduino",
  "Figma",
  "p5.js",
  "After Effects",
  "DaVinci Resolve",
  "Stable Diffusion",
  "Runway ML",
];

export function AboutPage() {
  return (
    <PageTransition>
      <main className={styles.about}>
        <div className={styles.top}>
          <section className={styles.intro}>
            <h1 className={styles.heading}>About</h1>
            <p className={styles.bio}>
              I'm a 3D designer and creative technologist focused on building interactive and immersive
              experiences through projection mapping, AR/XR and real-time media.
            </p>
            <p className={styles.bio}>
              I'm interested in game mechanics as a way to communicate complex ideas through play and I work with real-time
              systems to make those ideas tangible in space.
            </p>
          </section>
          <div className={styles.portrait}>
            <img
              src="/about-portrait.png"
              alt="Ranjani Ramakrishnan — pixel portrait"
              width={424}
              height={466}
              className={styles.portraitImage}
            />
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.entry}>
              <strong>NYU Tisch School of the Arts</strong>
              <span className={styles.entryMeta}>MPS, Interactive Telecommunications Program</span>
              <span className={styles.entryMeta}>2024 – 2026</span>
            </div>
            <div className={styles.entry}>
              <strong>M.O.P Vaishnav College for Women</strong>
              <span className={styles.entryMeta}>B.Sc. Visual Communication</span>
              <span className={styles.entryMeta}>Chennai, India · 2018</span>
            </div>

            <h2 className={styles.sectionTitle}>Experience</h2>
            <div className={styles.entry}>
              <strong>Freelance</strong>
              <span className={styles.entryMeta}>3D, AR & Visual Designer</span>
              <span className={styles.entryMeta}>2021 – 2024</span>
            </div>
            <div className={styles.entry}>
              <strong>Flipkart</strong>
              <span className={styles.entryMeta}>Lead, Visual Designer</span>
              <span className={styles.entryMeta}>2020 – 2021</span>
            </div>
            <div className={styles.entry}>
              <strong>Scapic</strong>
              <span className={styles.entryMeta}>Visual Designer</span>
              <span className={styles.entryMeta}>Bengaluru · 2019 – 2020</span>
            </div>
          </div>

          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>Tools</h2>
            <div className={styles.skillTags}>
              {tools.map((tool) => (
                <span key={tool} className={styles.tag}>
                  {tool}
                </span>
              ))}
            </div>

            <h2 className={styles.sectionTitle}>Contact</h2>
            <ul className={styles.contactList}>
              <li>
                <a href="mailto:ranjani.ramakrish@gmail.com">ranjani.ramakrish@gmail.com</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ranjanir27/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com/purrmaidpirate" target="_blank" rel="noopener noreferrer">
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
