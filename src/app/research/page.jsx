import { PageTitle } from "@/components/title_search/PageTitle";
import styles from "./page.module.css";
import { getResearch } from "@/services/topics";
import { NewsCard } from "@/components/news_card/NewsCard";

export default async function Page() {
  const news = await getResearch();
  return (
    <main className={styles.main}>
      <PageTitle title="pesquisas" subtitle="todas as produções científicas" />
      <section className={styles.card_div}>
        {news.map((elem, index) => {
          return (
            <NewsCard
              img={elem.img}
              date={elem.date}
              title={elem.title}
              description={elem.description}
              key={index}
              link={`/research/${elem.id}`}
            />
          );
        })}
      </section>
    </main>
  );
}
