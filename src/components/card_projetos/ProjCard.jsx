import styles from "./ProjCard.module.css";

export const ProjCard = ({ img, status, title, description }) => {
  return (
    <div className={styles.main_container}>
      <div>
        <img src={img} alt="proj_img" className={styles.card_img} />
      </div>
      <div className={styles.card_text}>
        <span className={styles.span}>{status}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
