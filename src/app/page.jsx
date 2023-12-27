import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Card } from "@/components/card/Card";
import { ProjetosHome } from "@/components/projetosHome/ProjetosHome";
import { LabHome } from "@/components/labHome/LabHome";
import { PesquisaHome } from "@/components/pesquisa_home/PesquisaHome";
import { getLatestNews, getProjects, getResearch } from "@/services/home";

export default async function Home() {
  const latest_news = await getLatestNews();
  const latest_projects = await getProjects();
  const latest_studies = await getResearch();
  return (
    <>
      <main className={styles.main}>
        <LabHome json={latest_news} />
        <ProjetosHome json={latest_projects} />
        <PesquisaHome json={latest_studies} />
        <Card />
      </main>
    </>
  );
}
