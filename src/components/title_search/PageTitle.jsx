import styles from "./page_title.module.css";
export const PageTitle = ({ title, subtitle }) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>{title}</h1>
      <div className={styles.search_div}>
        <input type="text" placeholder="BUSCAR" className={styles.input} />
        <img src="search.png" alt="search" className={styles.search_btn} />
      </div>
      <hr className={styles.hr} />
      <h2 className={styles.subtext}>{subtitle}</h2>
    </section>
  );
};
