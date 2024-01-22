"use client";
import styles from "./SystemCard.module.css";
import Link from "next/link";
import { AccessButton } from "@/components/accessButton/AccessButton";
import React from "react";

export const SystemCard = ({ title, description, link }) => {
  return (
    <div className={styles.main}>
      <div className={styles.system_container}>
        <h2 className={styles.h2}>{title}</h2>
        <img
          src="/down-arrow.svg"
          alt="Down_arrow"
          className={styles.arrow_closed}
        />
        <img
          src="/down-arrow.svg"
          alt="Down_arrow"
          className={styles.arrow_open}
        />
      </div>
      <div className={styles.panel}>
        <h3 className={styles.h3}>{title}</h3>
        <p className={styles.p}>{description}</p>
        <Link href={link} className={styles.link} target="_blank">
          <AccessButton />
        </Link>
      </div>
    </div>
  );
};
