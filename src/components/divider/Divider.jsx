"use client";
import styles from "./divider.module.css";

export const Divider = () => {
  function scrollWind() {
    window.scroll({
      top: 410,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.divider}>
      <div className={styles.arrow_div}>
        <img
          src="/black_arrow.png"
          alt="scrollArrow"
          className={styles.black_arrow}
          onClick={() => scrollWind()}
        />
      </div>
    </div>
  );
};
