import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mackleapsContainer}>
        <img src="Logo Mackleaps.png" />
        <h2>MACKLEAPS</h2>
      </div>

      <div className={styles.bread_crumbs}>
        <div>
          <h2 className={styles.h2}>PÁGINAS</h2>
        </div>
        <div>
          <h2 className={styles.h2}>PARCERIAS</h2>
        </div>
        <div>
          <h2 className={styles.h2}>CONTATOS</h2>
        </div>
      </div>
    </div>
  );
};
