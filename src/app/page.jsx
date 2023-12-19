import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/header/Header";
import { Card } from "@/components/card/Card";
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
      <Card />
    </>
  );
}
