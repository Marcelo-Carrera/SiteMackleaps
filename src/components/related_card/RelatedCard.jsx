"use client"
import styles from "./related_card.module.css"
import { useRouter } from "next/navigation";

export const RelatedCard =({img,title,description})=>{
    const router = useRouter()
    return(<div className={styles.card_container} onClick={()=>router.push("/")}>
        <div>
        <img src={img} alt="card_img" className={styles.card_image} />
        </div>
         <h2 className={styles.title}>{title}</h2>
         <p className={styles.description}>{description}</p>
     </div>)
}