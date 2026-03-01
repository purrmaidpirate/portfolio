import { PageTransition } from "~/src/components/page-transition";
import { SEMESTERS, sortedBlogPosts } from "~/src/data/blog-posts";
import type { BlogPost } from "~/src/data/blog-posts";
import styles from "./style.module.css";

function PostRow({ post }: { post: BlogPost }) {
  return (
    <a
      href={post.notionUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.postRow}
    >
      <span className={styles.postLeft}>
        <span className={styles.postTitle}>{post.title}</span>
        <span className={styles.courseTag}>{post.course}</span>
      </span>
      <time className={styles.postDate}>
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
        })}
      </time>
    </a>
  );
}

export function BlogPage() {
  return (
    <PageTransition>
      <main className={styles.blog}>
        <h1 className={styles.heading}>Blog</h1>

        {SEMESTERS.map((semester) => {
          const posts = sortedBlogPosts.filter((p) => p.semester === semester);
          if (posts.length === 0) return null;

          return (
            <section key={semester} className={styles.semesterSection}>
              <h2 className={styles.semesterHeading}>{semester}</h2>
              <div className={styles.posts}>
                {posts.map((post) => (
                  <PostRow key={post.id} post={post} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </PageTransition>
  );
}
