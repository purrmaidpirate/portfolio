import { NavLink, useLocation } from "react-router-dom";
import styles from "./style.module.css";

export function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`${styles.nav} ${isHome ? styles.navHome : styles.navPage}`}>
      <NavLink to="/" className={styles.logo}>
        <img src="/ranj-logo.webp" alt="Ranjani R." className={styles.logoImage} />
      </NavLink>
      <nav className={styles.links}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
          Home
        </NavLink>
        <NavLink to="/work" className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
          Work
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
          About
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
          Blog
        </NavLink>
      </nav>
      <div className={styles.navIcons}>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="mailto:hello@ranjani.com" aria-label="Email">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
      </div>
    </header>
  );
}
