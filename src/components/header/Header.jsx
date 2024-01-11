import styles from "./Header.module.css";
import { Navbar } from "../navbar/Navbar";
import { Search } from "../search/Search";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Search />
      <Navbar />
      <div className={styles.header_img_div}>
        <img
          src="/titulo-mackleaps.png"
          alt="logo"
          className={styles.header_img}
        />
      </div>
    </header>
  );
};
