import styles from "./PesquisaCard.module.css";

export const PesquisaCard = ({ img, txt }) => {
  return (
    <div
      className={styles.main_container}
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
      }}
    >
      <p className={styles.text}>{txt}</p>
    </div>
  );
};
