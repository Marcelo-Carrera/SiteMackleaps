import styles from "./ProjetosHome.module.css";
import { MoreButton } from "@/components/moreButton/MoreButton";
import { ProjCard } from "@/components/card_projetos/ProjCard";

const json = [
  {
    img: "https://s3-alpha-sig.figma.com/img/5a77/c42f/09e3fae2308fd2cdc6e4fd1c32a75500?Expires=1704067200&Signature=GnTKBaTZ9GeM88~MdbpLqWSpPRTQBAaNIfZTZRztYViG~BYzHG5YWwCudJUKGlcNPgrt72RBh73LTs-D4o7G-1OmCNUAG9iu3HjsVhYz-yctdeC4DfIiNGH2S7kLWQeTRSCQUhqPhBq3dhiydWt04ZwEdtqRDRBPjlqtgvfr4LC~hVJ8LXHAJyBqZt~h5fAyeORgsmmoailz8~xcWiELi9MM1hTFhq9ZVWp9vRyI6zGGs5jAktXHEVD0YlgZ~d~JwHLGxHMyRyS~ulsZXc0OonKtRvmPMGyalRfUFIILplDK2Kf5WDLff7PDONgXx4HfnZahYxpirtAuOErMjkhpBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    status: "Em Andamento",
    title: "Estação Meteorológica",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/bc12/33a6/0424c36804e1495872e9138430c6993b?Expires=1704067200&Signature=N-NaU5GcHRCERjPFtRNf-54QgI~YKcK2dRFePdXLhSXFAuvqpfbkTJXJT4biKwWrHN0493fuWBWkXGvvUogv2-LOgqVhXOE9aNBlBVfXAGpWpV5hEoIk-Xf7D4OrnoBsxyTQYKrwrjGHmUelkbq9MwUKjux1et9n35Umn4E4-Uhuh97M4OOxcMR2Om~w1ubO6G-s8blVQtKMnerYKJqrWiFnARoU1KLaMomz1b5YzI21--zTQbo~hx-LWKyB4tt6JzHJZVmlmpzkPyONDtMmAvXJYZPkrSUDprBLEpUblIdo9M0UGNZCsmIu1ux5cF5DSZ9EFYuTcI-uXv~vnjgtEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    status: "Em Andamento",
    title: "Site Mackleaps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/04d8/971b/d7c8487c1bcfbfc05b40e4523843e22a?Expires=1704067200&Signature=W3yZw2K5QhknxTNzKYWDTHH0iKZ~5sqE3OKSi6hPBw4Qsof1Jc~9NH~WqYh7xny4S8lwCkR33sRqxN3DLQqlvbkRao2vT3amVj6wAZJ81jYATjR-bitCexYFdT7ztAIaPj8dNI2Y8WtMS3p8ytILwBa0NtdKllCK3J0k5KkbZrY3YgthHke4v0CpR-B9fFIq-46FUDeyHwoUptV0gWSbxqa62gyslqpAFHr5-Ig4Q5sMKn6B0BdCoKwEFBV3qWG1g9yof6Wz-7ymo7Gyk4DseKxRytdHVY2wiE4uR3Sc2gkT1pgYzYpaEZCXkZxYZinzOcn-6OqxI9W8tf3xtMzoJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    status: "Em Andamento",
    title: "Contador de gente",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const ProjetosHome = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.projetosHome}>
        <h2 className={styles.h2}>PROJETOS</h2>
        <p className={styles.p}>
          Confira abaixo os principais projetos em desenvolvimento no
          laboratório
        </p>
        <MoreButton />
      </div>
      <div className={styles.card_container}>
        {json.map((project, index) => (
          <div key={index}>
            {" "}
            <ProjCard
              img={project.img}
              title={project.title}
              description={project.description}
              status={project.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
