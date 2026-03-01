import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "~/src/components/scroll-to-top";
import { Nav } from "~/src/nav";
import { AboutPage } from "~/src/pages/about";
import { BlogPage } from "~/src/pages/blog";
import { HomePage } from "~/src/pages/home";
import { ProjectPage } from "~/src/pages/project";
import { WorkPage } from "~/src/pages/work";

export function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
}
