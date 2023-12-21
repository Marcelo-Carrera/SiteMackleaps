import styles from "./LabCard.module.css";

export const LabCard = ({ img, date, title, description, link }) => {
  return (
    <div className={styles.main_container}>
      <img src="card_pic.jpg" alt="card" className={styles.card_img} />
      <h1>oi</h1>
    </div>
  );
};
