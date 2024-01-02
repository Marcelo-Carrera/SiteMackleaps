import styles from "./page.module.css";

export default async function Page() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>SOBRE NÓS</h1>
      <p className={styles.p}>
        O MackLEAPS (Laboratório de Estudos em Ambiente de Produção de Software
        da Universidade Presbiteriana Mackenzie) é um laboratório de pesquisa e
        desenvolvimento de software ligado à Faculdade de Computação e
        Informática ( FCI ) da Universidade Presbiteriana Mackenzie
      </p>
      <h2 className={styles.h2}>Educação</h2>
      <p className={styles.p}>
        A FCI foi fundada em 1970, com o nome de Faculdade de Tecnologia, em
        decorrência da necessidade de suprir, em curto prazo, os vários setores
        do mercado de trabalho com profissionais qualificados em cursos
        superiores de base tecnológica. Em 1999, foi transformada em Faculdade
        de Computação e Informática.
      </p>
      <h2 className={styles.h2}>Objetivos</h2>
      <p className={styles.p}>
        Identificar software e requisitos do sistema, definir componentes de
        software e suas propriedades externas, identificar os critérios de
        controle de qualidade, preparar alunos para o mercado através de
        projetos reais e construir softwares seguros e aplicáveis.
      </p>
      <h2 className={styles.h2}>Parcerias</h2>
      <div className={styles.parceria}>
        <img src="atech.png" alt="atech" className={styles.image} />
      </div>
    </main>
  );
}
