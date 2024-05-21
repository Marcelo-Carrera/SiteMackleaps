"use client";
import styles from "./SystemCard.module.css";
import Link from "next/link";
import { AccessButton } from "@/components/accessButton/AccessButton";
import { useState } from "react";
import React from "react";

export const SystemCard = ({
  title,
  description,
  situation,
  natureza,
  members,
  link,
}) => {
  const [open, setOpen] = useState(0);

  return (
    <div className={styles.main}>
      <div
        onClick={() => setOpen(open != 1 ? 1 : 0)}
        className={
          open === 1
            ? styles.system_containerAlternative
            : styles.system_container
        }
      >
        <h2 className={styles.h2}>{title}</h2>
        <img
          src="/down-arrow.svg"
          alt="Down_arrow"
          className={open === 1 ? styles.arrow_open : styles.arrow_closed}
        />
      </div>
      <div className={open === 1 ? styles.show : styles.panel}>
        <h3 className={styles.h3}>{title}</h3>
        <p className={styles.p}>{description}</p>
        <p className={styles.p}>{situation}</p>
        <p className={styles.p}>{natureza}</p>
        <p className={styles.p}>{members}</p>
        <Link
          href={link}
          className={link === "" ? styles.linkNone : styles.link}
          target="_blank"
        >
          <AccessButton />
        </Link>
      </div>
    </div>
  );
};
