import styles from "./ResidenciaCard.module.css";
import Link from "next/link";

export const ResidenciaCard = () => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.leftDiv}>
        <h1 className={styles.h1}>
          Processo seletivo - Residência de Software 2024/1
        </h1>
        <p className={styles.p}>
          A segunda e última etapa ocorreu em 28 de fevereiro de 2024. Confira a
          lista de aprovados!
        </p>
        <div className={styles.linkContainer}>
          <Link
            href="https://drive.google.com/file/d/125qd-rUlw5Xp7DIkhErfCFHXTdan_d67/view?usp=sharing"
            className={styles.link}
            target="_blank"
          >
            Lista de aprovados
          </Link>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <img src="/aprovados.png" alt="QRCode" className={styles.image} />
      </div>
    </div>
  );
};
