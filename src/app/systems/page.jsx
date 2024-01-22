import { SystemCard } from "@/components/card_system/SystemCard";
import styles from "./page.module.css";
import { getDbSystemsPage } from "@/services/db_queries";

export default async function Page() {
  const systemsPage = await getDbSystemsPage();
  return (
    <main className={styles.main}>
      <div className={styles.text}>
        <h1 className={styles.h1}>Sistemas</h1>
        <p className={styles.p}>Conheça e acesse nossos sistemas</p>
      </div>
      <section className={styles.card_div}>
        {systemsPage.map((elem, index) => {
          return (
            <SystemCard
              title={elem.title}
              description={elem.description}
              link={elem.link}
              key={index}
            />
          );
        })}
      </section>
    </main>
  );
}
