import { PageTransition } from "~/src/components/page-transition";
import { SEMESTERS, blogPosts } from "~/src/data/blog-posts";
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
      <span className={styles.postTitle}>{post.title}</span>
      <time className={styles.postDate}>
        {new Date(post.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}
      </time>
    </a>
  );
}

function getCourses(posts: BlogPost[]): string[] {
  const seen = new Set<string>();
  return posts
    .filter((p) => !seen.has(p.course) && seen.add(p.course))
    .map((p) => p.course);
}

export function BlogPage() {
  return (
    <PageTransition>
      <main className={styles.blog}>
        <h1 className={styles.heading}>Blog</h1>

        {SEMESTERS.map((semester) => {
          const semesterPosts = blogPosts.filter((p) => p.semester === semester);
          if (semesterPosts.length === 0) return null;

          const courses = getCourses(semesterPosts);

          return (
            <section key={semester} className={styles.semesterSection}>
              <h2 className={styles.semesterHeading}>{semester}</h2>

              {courses.map((course) => {
                const coursePosts = semesterPosts
                  .filter((p) => p.course === course)
                  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

                return (
                  <div key={course} className={styles.courseGroup}>
                    <h3 className={styles.courseHeading}>{course}</h3>
                    <div className={styles.posts}>
                      {coursePosts.map((post) => (
                        <PostRow key={post.id} post={post} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </section>
          );
        })}
      </main>
    </PageTransition>
  );
}
