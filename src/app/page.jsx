import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Card } from "@/components/card/Card";
import { ProjetosHome } from "@/components/projetosHome/ProjetosHome";
import { LabHome } from "@/components/labHome/LabHome";
import { PesquisaHome } from "@/components/pesquisa_home/PesquisaHome";
import { ResidenciaCard } from "@/components/cardResidencia/ResidenciaCard";
import {
  getDbLatestNews,
  getDbLatestProjects,
  getDbLatestResearch,
} from "@/services/db_queries";

export default async function Home() {
  const latest_news = await getDbLatestNews();
  const latest_projects = await getDbLatestProjects();
  const latest_studies = await getDbLatestResearch();

  return (
    <>
      <main className={styles.main}>
        <LabHome json={latest_news} />
        <ProjetosHome json={latest_projects} />
        <ResidenciaCard />
        <PesquisaHome json={latest_studies} />
        <Card />
      </main>
    </>
  );
}
