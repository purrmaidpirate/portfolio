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
    </header>
  );
}
