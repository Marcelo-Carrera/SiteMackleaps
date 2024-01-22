"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import React from "react";

export const Navbar = ({ setOpen, open }) => {
  const [position, setPosition] = React.useState(false);

  function handleHamburguer() {
    setPosition(!position);
  }
  function handleSearch() {
    setOpen(!open);
  }
  return (
    <>
      <div className={styles.mainContainer}>
        <div>
          <Link href="/" className={styles.link}>
            <img src="/logo-mackleaps.png" alt="logo-mackleaps" />
          </Link>
        </div>
        <div className={styles.link_container}>
          <Link href="/projects" className={styles.link}>
            PROJETOS
          </Link>
          <Link href="/research" className={styles.link}>
            PESQUISAS
          </Link>
          <Link href="/news" className={styles.link}>
            NOTÍCIAS
          </Link>
          <Link href="/team" className={styles.link}>
            EQUIPE
          </Link>
          <Link href="/about" className={styles.link}>
            SOBRE
          </Link>
          <Link href="/systems" className={styles.system}>
            SISTEMAS
          </Link>
          <div className={styles.dropdown}>
            <Link href="/systems" className={styles.mainDropdown}>
              SISTEMAS
            </Link>
            <div className={styles.dropdownItens}>
              <Link
                href="https://mackleaps.mackenzie.br/oriente"
                className={styles.linkSub}
                target="_blank"
              >
                Oriente
              </Link>
              <Link
                href="https://lab-mackleaps.gitbook.io/residencia-de-software-macklaeps-upm-fci/"
                className={styles.linkSub}
                target="_blank"
              >
                GitBook
              </Link>
              <Link
                href="https://mackleaps.mackenzie.br/redmine"
                className={styles.linkSub}
                target="_blank"
              >
                Redmine
              </Link>
              <Link
                href="https://mackleaps.mackenzie.br/carrossel"
                className={styles.linkSub}
                target="_blank"
              >
                Carrossel
              </Link>
              <Link href="/" className={styles.linkSub} target="_blank">
                Contador de gente
              </Link>
              <Link href="/" className={styles.linkSub} target="_blank">
                Estação meteorológica
              </Link>
            </div>
          </div>
          <Link href="/contact" className={styles.link}>
            CONTATO
          </Link>
          <img
            src="/pesquisa.png"
            alt="pesquisar"
            className={styles.search_button}
            onClick={() => handleSearch()}
          />
        </div>
        <img
          src="/hamburguer.png"
          alt="menu"
          className={styles.hamburguer}
          onClick={() => handleHamburguer()}
        />
      </div>
      <div className={position ? styles.hamburguer_menu : styles.closed}>
        <div className={styles.icons_Hamburguer}>
          <img
            src="/pesquisa.png"
            alt="pesquisar"
            className={styles.search_button}
            onClick={() => handleSearch()}
          />
          <img
            src="/close.png"
            alt="fechar"
            className={styles.search_button}
            onClick={() => handleHamburguer()}
          />
        </div>
        <Link href="/projects" className={styles.link_hamburguer}>
          PROJETOS
        </Link>
        <Link href="/research" className={styles.link_hamburguer}>
          PESQUISAS
        </Link>
        <Link href="/news" className={styles.link_hamburguer}>
          NOTÍCIAS
        </Link>
        <Link href="/team" className={styles.link_hamburguer}>
          EQUIPE
        </Link>
        <Link href="/about" className={styles.link_hamburguer}>
          SOBRE
        </Link>
        <Link href="/contact" className={styles.link_hamburguer}>
          CONTATO
        </Link>
      </div>
    </>
  );
};
