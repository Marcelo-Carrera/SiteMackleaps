import { PageTitle } from "@/components/title_search/PageTitle";
import styles from "./page.module.css";
import { getNews } from "@/services/topics";
import { NewsCard } from "@/components/news_card/NewsCard";

export default async function Page() {
  const news = await getNews();
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
            />
          );
        })}
      </section>
    </main>
  );
}