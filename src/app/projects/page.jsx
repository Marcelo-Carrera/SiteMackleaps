import { PageTitle } from "@/components/title_search/PageTitle";
import styles from "./page.module.css";
import { NewsCard } from "@/components/news_card/NewsCard";
import { getDbProjects } from "@/services/db_queries";

export default async function Page() {
  const news = await getDbProjects();
  return (
    <main className={styles.main}>
      <PageTitle title="projetos" subtitle="Todos os projetos" />
      <section className={styles.card_div}>
        {news.map((elem, index) => {
          return (
            <NewsCard
              img={elem.img}
              date={elem.date}
              title={elem.title}
              description={elem.description}
              key={index}
              link={`projects/${elem.id}`}
            />
          );
        })}
      </section>
    </main>
  );
}
