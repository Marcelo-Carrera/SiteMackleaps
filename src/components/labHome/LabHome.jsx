import styles from "./LabHome.module.css";
import { MoreButton } from "@/components/moreButton/MoreButton";
import { NewsCard } from "../news_card/NewsCard";

const json = [
  {
    img: "https://s3-alpha-sig.figma.com/img/97f9/fc56/f27dfcc45c8e6e83b09d7915b32ccbf2?Expires=1704067200&Signature=fhtUnM00ZJ31sOnCWJjWMkY8B8wRPz-cpnLxaveV~R~BdMyCv8PDc~VE-cwVZcDDpTyM9SJQjqxCVP32iFYKRWCqHEhvX0fmY~Wjj-BvQi9td5xbiAKN3VDBqogxosuPsIP9EWkyAFM~Ae2i1bDFAiR7JIBS6qQWMn0prIzBWfCHadXuiYKoK9O1jWSkJ3E3diXYlJdeezW0CHL864IEF0Eyv7xvXw-wngKNarWmGI52kP48VDIzvkiBDhuzI6R9Erc2ecRTCSh0jxU-7rmxPYcfYwc2r6cIzCWx9QWHp2gA8sDm1ivE9IapngZG8UneVIBN9cAntOzcR1neK1VXbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: "18 ago. 2023",
    title: "Karine choi e joão pedro trabalham duro em protótipo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/bfa6/301b/834edf54bd0a13f178eacdf6614826e5?Expires=1704067200&Signature=ZlRFssUayQaRWCZk-baAlQ3Dn20lD5PfMhfGRCVtAQAw~IMhmAXt025Gs5CdRfwT-U7Px6r3TXniXVwfqiaZzDF3LLQS0uw-WAlX9r8Cp0s0cltGiNk-wNkPsw1tadpv~GsCZPT48tq-n1fk8Nqes0muj74xMdJ~eLJpuuuphK66Gbow6ED3OG6qRnqeZWfGt5ne4UIN31ajgx9a~EozfVrff5M3P2o3P1AAg2hNYooujzVPCWnaDa36yta4ID86fDs3xiB2rIg7GEkREdbkJhA2mG1h~UfAgF3QfoRMCsJCTCaqFbCkH1I~Qk7TX50nigGeg0TN4KpSsgCRQpwUxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: "18 ago. 2023",
    title: "Karine choi e joão pedro trabalham duro em protótipo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const LabHome = () => {
  return (
    <div className={styles.labHome}>
      <div className={styles.text_container}>
        <h2 className={styles.h2}> SAIBA MAIS SOBRE O NOSSO LABORATÓRIO</h2>
        <MoreButton />
      </div>
      <div className={styles.card_container}>
        {json.map((news, index) => (
          <NewsCard
            img={news.img}
            title={news.title}
            description={news.description}
            date={news.date}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
