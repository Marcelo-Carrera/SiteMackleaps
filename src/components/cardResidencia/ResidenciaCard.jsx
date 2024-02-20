import styles from "./ResidenciaCard.module.css";
import Link from "next/link";

export const ResidenciaCard = () => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.leftDiv}>
        <h1 className={styles.h1}>
          Processo seletivo - Residência de Software
        </h1>
        <p className={styles.p}>
          Inscrições abertas 1o etapa - De 15 a 25 de fevereiro de 2024.
        </p>
        <div className={styles.linkContainer}>
          <Link
            href="https://forms.office.com/pages/responsepage.aspx?id=QJTaUV5Os0eOXEgX9vQ8BG6U3Qgo6QBKlzGqu2XWYdpUOVRSRVRDVkwxVEQwVFA1TEw4V1hKV0ZISiQlQCN0PWcu&origin=QRCode"
            className={styles.link}
            target="_blank"
          >
            Inscreva-se
          </Link>
          <Link
            href="https://drive.google.com/file/d/1NGraA2V6GycaomLfm63mVuwazB8KtQY2/view?usp=sharing"
            target="_blank"
            className={styles.link}
          >
            Edital
          </Link>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <img
          src="/QRCode_inscricaoResidencia2.png"
          alt="QRCode"
          className={styles.image}
        />
      </div>
    </div>
  );
};
