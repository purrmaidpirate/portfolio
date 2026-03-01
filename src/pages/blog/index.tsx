import { PageTransition } from "~/src/components/page-transition";
import styles from "./style.module.css";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
};

const placeholderPosts: BlogPost[] = [
  {
    slug: "hello-itp",
    title: "Starting at NYU ITP",
    date: "2024-09-01",
    excerpt:
      "Reflections on beginning my Masters at the Interactive Telecommunications Program and what I hope to explore in immersive media, projection mapping, and creative technology.",
    image: "https://www.artic.edu/iiif/2/a49c5ada-f461-d7d1-0f1b-468ac577a872/full/1200,/0/default.jpg",
  },
  {
    slug: "projection-mapping-explorations",
    title: "Projection Mapping Explorations",
    date: "2025-02-15",
    excerpt: "",
  },
  {
    slug: "game-mechanics-communication",
    title: "Game Mechanics as Communication",
    date: "2025-06-01",
    excerpt: "",
  },
];

export function BlogPage() {
  return (
    <PageTransition>
      <main className={styles.blog}>
        <h1 className={styles.heading}>Blog</h1>

        <div className={styles.posts}>
          {placeholderPosts.map((post, index) => {
            const isFeatured = index === 0 && post.image;

            if (isFeatured) {
              return (
                <article key={post.slug} className={styles.featuredPost}>
                  <div className={styles.featuredImage}>
                    <img src={post.image} alt={post.title} />
                  </div>
                  <time className={styles.date}>
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                  <h2 className={styles.featuredTitle}>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                </article>
              );
            }

            return (
              <article key={post.slug} className={styles.postRow}>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <time className={styles.postDate}>
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                </time>
              </article>
            );
          })}
        </div>
      </main>
    </PageTransition>
  );
}
