"use client";
import styles from "./Header.module.css";
import { Navbar } from "../navbar/Navbar";
import { SearchOverlay } from "../SearchOverlay/SearchOverlay";
import React from "react";
export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className={styles.header}>
      <Navbar setOpen={setIsOpen} open={isOpen} />
      {isOpen ? <SearchOverlay setOpen={setIsOpen} open={isOpen} /> : ""}
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
