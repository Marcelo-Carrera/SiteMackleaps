import styles from "./LabHome.module.css";
import { MoreButton } from "@/components/moreButton/MoreButton";

export const LabHome = () => {
  return (
    <div className={styles.labHome}>
      <h2 className={styles.h2}> SAIBA MAIS SOBRE O NOSSO LABORATÓRIO</h2>
      <MoreButton />
    </div>
  );
};
