import styles from "./page.module.css";
import { getTeamMembers } from "@/services/topics";
import { getCollaborators } from "@/services/topics";
import { getFormerCollaborators } from "@/services/topics";
import { TeamCard } from "@/components/cardTeam/TeamCard";

export default async function Page() {
  const teamMembers = await getTeamMembers();
  const collaborators = await getCollaborators();
  const formerCollaborators = await getFormerCollaborators();
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>EQUIPE</h1>
      <p>Conheça nossos membros atuais, colaboradores e antigos colaboradores</p>

      <div className={styles.membros}>
        <h2 className={styles.h2}>MEMBROS ATUAIS</h2>
        <section className={styles.card_div}>
          {teamMembers.map((elem, index) => {
            return (
              <TeamCard img={elem.img} name={elem.name} role={elem.role} date="" key={index}/>
            );
          })}
        </section>
      </div>

      <div className={styles.colaboradores}>
        <h2 className={styles.h2}>COLABORADORES</h2>
        <section className={styles.card_div}>
          {collaborators.map((elem, index) => {
            return (
              <TeamCard img={elem.img} name={elem.name} role={elem.role} date="" key={index}/>
            );
          })}
        </section>
      </div>

      <div className={styles.exMembros}>
        <h2 className={styles.h2}>COLABORADORES ANTERIORES</h2>
        <section className={styles.card_div}>
          {formerCollaborators.map((elem, index) => {
            return (
              <TeamCard img={elem.img} name={elem.name} role="" date={elem.date} key={index}/>
            );
          })}
        </section>
      </div>
    </main>
  );
}
