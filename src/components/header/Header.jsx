"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import React from "react";

export const Header = () => {
  const [position, setPosition] = React.useState(false);

  function handleHamburguer() {
    setPosition(!position);
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <div>
          <img src="logo-mackleaps.png" alt="logo-mackleaps" />
        </div>
        <div className={styles.link_container}>
          <Link href="/" className={styles.link}>
            PROJETOS
          </Link>
          <Link href="/" className={styles.link}>
            PESQUISAS
          </Link>
          <Link href="/" className={styles.link}>
            EQUIPE
          </Link>
          <Link href="/" className={styles.link}>
            SOBRE
          </Link>
          <Link href="/" className={styles.link}>
            CONTATO
          </Link>
          <img
            src="pesquisa.png"
            alt="pesquisar"
            className={styles.search_button}
          />
        </div>
        <img
          src="hamburguer.png"
          alt="menu"
          className={styles.hamburguer}
          onClick={() => handleHamburguer()}
        />
      </div>
      <div className={position ? styles.hamburguer_menu : styles.closed}>
        <div className={styles.icons_Hamburguer}>
          <img
            src="pesquisa.png"
            alt="pesquisar"
            className={styles.search_button}
          />
          <img
            src="close.png"
            alt="fechar"
            className={styles.search_button}
            onClick={() => handleHamburguer()}
          />
        </div>
        <Link href="/" className={styles.link_hamburguer}>
          PROJETOS
        </Link>
        <Link href="/" className={styles.link_hamburguer}>
          PESQUISAS
        </Link>
        <Link href="/" className={styles.link_hamburguer}>
          EQUIPE
        </Link>
        <Link href="/" className={styles.link_hamburguer}>
          SOBRE
        </Link>
        <Link href="/" className={styles.link_hamburguer}>
          CONTATO
        </Link>
      </div>
    </>
  );
};
