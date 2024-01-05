import styles from "./page.module.css";
import { CardContact } from "@/components/card_contact/CardContact";
import { SocialMedia } from "@/components/socialContact/SocialMedia";

export default async function Page() {
  return (
    <main className={styles.main}>
      <CardContact />
      <SocialMedia />
    </main>
  );
}
