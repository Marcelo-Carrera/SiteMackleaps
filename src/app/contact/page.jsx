import styles from "./page.module.css"
import { CardContact } from "@/components/card_contact/CardContact"

export default async function Page (){
    return (
        <main className={styles.main}>
            <CardContact />
        </main>
    )
}