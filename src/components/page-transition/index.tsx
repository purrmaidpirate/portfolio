import * as React from "react";
import styles from "./style.module.css";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return <div className={`${styles.transition} ${visible ? styles.visible : ""}`}>{children}</div>;
}
