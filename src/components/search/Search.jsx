import styles from "./Search.module.css"
import Link from "next/link";

export const Search = () => {
    return (
        <div className={styles.main}>
            <div className={styles.text}><h1 className={styles.h1}>Estou Buscando Por...</h1></div>
            <div className={styles.buttons_div}>
                <Link href="/projects"><button className={styles.button}>Projetos</button></Link>
                <Link href="/research"><button className={styles.button}>Pesquisas</button></Link>
                <Link href="/news"><button className={styles.button}>Notícias</button></Link>
            </div>
            <div className={styles.search_div}>
                <input type="text" placeholder="BUSQUE" className={styles.input} />
                <img src="search.svg" alt="search" className={styles.search_btn}/>
            </div>
        </div>
    )
}