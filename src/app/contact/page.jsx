import styles from "./page.module.css";
import { CardContact } from "@/components/card_contact/CardContact";
import { SocialMedia } from "@/components/socialContact/SocialMedia";
import { CardMobile } from "@/components/card_mobile/CardMobile";

export default async function Page() {
  return (
    <>
      <main className={styles.main}>
        <CardContact />
        <SocialMedia />
      </main>
      <div className={styles.mobile}><CardMobile /></div>
    </>
  );
}
