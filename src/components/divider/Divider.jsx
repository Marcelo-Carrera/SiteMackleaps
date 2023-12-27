import styles from "./divider.module.css";

export const Divider = () => {
  return (
    <div className={styles.divider}>
      <div className={styles.arrow_div}>
        <img src="black_arrow.png" alt="" className={styles.black_arrow} />
      </div>
    </div>
  );
};
