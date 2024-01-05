"use client"
import styles from "./relacionados.module.css"
import { RelatedCard } from "@/components/related_card/RelatedCard";
import React from "react";


export const getRelatedTexts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/related`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };


export const Relacionados =()=>{
    const [data,setData] =  React.useState([]);

    React.useEffect(()=>{
        async function fetch(){
            const infos = await getRelatedTexts();
            setData(infos)
        }
        fetch()
    },[])
    return(  <div className={styles.container}>
        <h2 className={styles.title}>Textos Relacionados</h2>
        <div className={styles.card_container}>
        {data.map((related,index)=>{
           return(
           
                <RelatedCard img={related.img} title={related.title} description={related.description} key={index} onClik={()=>console.log("click")}/>
           )
        })}
        </div>
    </div>)
    
}