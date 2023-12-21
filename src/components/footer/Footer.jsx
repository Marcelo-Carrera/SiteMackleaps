import Link from "next/link";
import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mackleapsContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="logo-mackleaps.png" alt="logo-mackleaps" />
          <h2>MACKLEAPS</h2>
        </div>
      </div>

      <div className={styles.bread_crumbs}>
        <div className={styles.link_column}>
          <h2 className={styles.h2}>PÁGINAS</h2>
          <Link href="/" className={styles.link}>
            HOME
          </Link>
          <Link href="/" className={styles.link}>
            PROJETOS
          </Link>
          <Link href="/" className={styles.link}>
            PESQUISA
          </Link>
          <Link href="/" className={styles.link}>
            EQUIPE
          </Link>
          <Link href="/" className={styles.link}>
            NOTÍCIAS
          </Link>
          <Link href="/" className={styles.link}>
            SOBRE
          </Link>
        </div>
        <div className={styles.link_column}>
          <h2 className={styles.h2}>PARCERIAS</h2>
          <img src="atech.png" alt="atech" />
        </div>
        <div className={styles.link_column}>
          <h2 className={styles.h2}>CONTATOS</h2>
          <Link href="/" className={styles.social_midias}>
            Email
          </Link>
          <Link href="/" className={styles.social_midias}>
            Linkedin
          </Link>
          <Link href="/" className={styles.social_midias}>
            Instagram
          </Link>
        </div>
      </div>
      <div className={styles.address_container}>
        <img src="map.png" alt="mapa" />
        <p className={styles.address}>
          Endereço R. da Consolação, 930 - Consolação, São Paulo - SP
        </p>
        <p className={styles.address}>Telefone (11)2114-8000</p>
      </div>
    </div>
  );
};
