import styles from "./Card.module.css";
import Link from "next/link";

export const Card = () => {
  return (
    <div className={styles.card_container}>
      <h2 className={styles.h2}>SEJA UM DE NÓS!</h2>
      <p className={styles.p}>
        Alunos da FCI e de outras unidades acadêmicas podem participar dos
        nossos projetos. A participação pode ser virtual ou presencial, o
        vínculo pode ser voluntário ou bolsista estagiário. Nossos projetos
        proporcionam o vínculo a programas de PIBIC/PIVIC e geram horas de
        Atividades Complementares para os participantes.
      </p>
      <div className={styles.btn_container}>
        <Link href="/about" className={styles.link}>
          <button className={styles.about_button}>SOBRE</button>
        </Link>
        <Link href="/contact" className={styles.link}>
          <button className={styles.contact_button}>CONTATO</button>
        </Link>
      </div>
    </div>
  );
};
