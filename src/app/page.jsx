import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/header/Header";
import { Card } from "@/components/card/Card";
import { ProjetosHome } from "@/components/projetosHome/ProjetosHome";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Header />
        <div className={styles.header_img_div}>
          <img
            src="titulo-mackleaps.png"
            alt="logo"
            className={styles.header_img}
          />
        </div>
      </header>
      <div className={styles.divider}>
        <div className={styles.arrow_div}>
          <img src="black_arrow.png" alt="" className={styles.black_arrow} />
        </div>
      </div>
      <main className={styles.main}>
        <ProjetosHome />
        <Card />
      </main>
    </>
  );
}
