import { getResearch } from "@/services/topics";
import styles from "./page.module.css";
import { Relacionados } from "@/components/relacionados/Relacionados";
import { getDbProjects } from "@/services/db_queries";

async function getData(id) {
  const research = await getDbProjects();
  const selectedResearch = research.find((item) => item.id == id);
  if (selectedResearch) {
    return selectedResearch;
  } else {
    throw new Error("404");
  }
}

export default async function Page({ params }) {
  const data = await getData(params.id);

  return (
    <div className={styles.main_div}>
      <main className={styles.main}>
        <div className={styles.img_div}>
          <img src={data?.img} alt="headline_image" className={styles.img} />
        </div>
        <div className={styles.title_container}>
          <div className={styles.divider}></div>
          <h2 className={styles.title}>{data?.title}</h2>
        </div>
        <section className={styles.author_container}>
          <h3
            className={styles.author_name}
          >{`${data?.date} - ${data?.status}`}</h3>
        </section>
        <section className={styles.text_body}>{data.body}</section>
      </main>
      <Relacionados />
    </div>
  );
}
