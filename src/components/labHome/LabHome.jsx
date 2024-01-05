import styles from "./LabHome.module.css";
import { MoreButton } from "@/components/moreButton/MoreButton";
import { NewsCard } from "../news_card/NewsCard";
import Link from "next/link";

export const LabHome = ({ json }) => {
  return (
    <div className={styles.labHome}>
      <div className={styles.text_container}>
        <h2 className={styles.h2}> SAIBA MAIS SOBRE O NOSSO LABORATÓRIO</h2>
        <Link href="/about" className={styles.link}>
          <MoreButton />
        </Link>
      </div>
      <div className={styles.card_container}>
        {json.map((news, index) => (
          <NewsCard
            img={news.img}
            title={news.title}
            description={news.description}
            date={news.date}
            key={index}
            link="/news"
          />
        ))}
      </div>
    </div>
  );
};
