import { PageTitle } from "@/components/title_search/PageTitle";
import styles from "./page.module.css";
import { NewsCard } from "@/components/news_card/NewsCard";
import { getDbNews } from "@/services/db_queries";

// function waitFor(ms) {
//   return new Promise((resolve) => setTimeout(() => resolve(), ms));
// }

export default async function Page() {
  //await waitFor(5000);
  const news = await getDbNews();
  return (
    <main className={styles.main}>
      <PageTitle title="notícias" subtitle="últimas notícias" />
      <section className={styles.card_div}>
        {news.map((elem, index) => {
          return (
            <NewsCard
              img={elem.img}
              date={elem.date}
              title={elem.title}
              description={elem.description}
              key={index}
              link={`/news/${elem.id}`}
            />
          );
        })}
      </section>
    </main>
  );
}
