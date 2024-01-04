import styles from "./NewsCard.module.css";
import Link from "next/link";
export const NewsCard = ({ img, date, title, description, link }) => {
  return (
    <div className={styles.main_card}>
      <img src={img} alt="card" className={styles.card_img} />
      <div className={styles.text}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Link className={styles.leia} href={link}>Leia mais</Link>
      </div>
    </div>
  );
};
