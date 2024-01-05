import styles from "./SocialMedia.module.css";
import Link from "next/link";

export const SocialMedia = () => {
  return (
    <div className={styles.main}>
      <Link
        href="https://www.instagram.com/computacao_mackenzie/"
        target="
      _blank"
      >
        <img
          src="/Instagram.png"
          alt="Instagram logo"
          className={styles.image}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/computa%C3%A7%C3%A3o-mackenzie-473540216/?originalSubdomain=br"
        target="_blank"
      >
        <img src="/Linkedin.png" alt="Linkedin logo" className={styles.image} />
      </Link>
    </div>
  );
};
