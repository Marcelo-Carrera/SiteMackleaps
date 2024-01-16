import styles from "./TeamCard.module.css";
import Link from "next/link";

export const TeamCard = ({ img, name, role, link, date }) => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.cardImage}>
        <img src={img} alt="image" className={styles.image} />
      </div>
      <div className={styles.cardText}>
        <h3 className={styles.name}>{name}</h3>
        {role ? <p className={styles.role}>{role}</p> : ""}
        {date ? <p className={styles.date}>{date}</p> : ""}
        <div className={styles.link}>
          {link ? (
            <Link href={link} className={styles.lattes} target="_blank">
              <img
                src="/link.png"
                alt="Currículo Lattes"
                className={styles.icon}
              />
              Currículo Lattes
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
