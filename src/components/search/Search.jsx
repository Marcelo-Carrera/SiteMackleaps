"use client";
import styles from "./Search.module.css";
import Link from "next/link";
import React from "react";

export const Search = ({ setOpen, open }) => {
  function handleHamburguer() {
    setOpen(!open);
  }

  return (
    <div className={styles.main}>
      <div className={styles.close}>
        <img
          src="/close.png"
          alt="fechar"
          onClick={() => handleHamburguer()}
          className={styles.close_button}
        />
      </div>
      <div className={styles.text}>
        <h1 className={styles.h1}>Estou Buscando Por...</h1>
      </div>
      <div className={styles.buttons_div}>
        <Link href="/projects">
          <button className={styles.button}>Projetos</button>
        </Link>
        <Link href="/research">
          <button className={styles.button}>Pesquisas</button>
        </Link>
        <Link href="/news">
          <button className={styles.button}>Notícias</button>
        </Link>
      </div>
      <div className={styles.search_div}>
        <input type="text" placeholder="BUSQUE" className={styles.input} />
        <img src="search.svg" alt="search" className={styles.search_btn} />
      </div>
    </div>
  );
};
