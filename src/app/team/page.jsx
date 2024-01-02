import styles from "./page.module.css";

export default async function Page() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>EQUIPE</h1>
      <p>Conheça nossos membros atuais e antigos colaboradores</p>
      <div className={styles.membros}>
        <h2 className={styles.h2}>MEMBROS ATUAIS</h2>
      </div>

      <div className={styles.colaboradores}>
        <h2 className={styles.h2}>COLABORADORES</h2>
      </div>
    </main>
  );
}
