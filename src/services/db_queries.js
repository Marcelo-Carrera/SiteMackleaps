import db from "../../db.json";

export async function getDbLatestNews() {
  return db.noticias_home;
}

export async function getDbLatestProjects() {
  return db.projetos_home;
}

export async function getDbLatestResearch() {
  return db.pesquisa_home;
}

export async function getDbNews() {
  return db.noticias;
}

export async function getDbProjects() {
  return db.projetos;
}

export async function getDbTeamMembers() {
  return db.responsaveis;
}

export async function getDbCollaborators() {
  return db.colaboradores;
}

export async function getDbFormerCollaborators() {
  return db.excolaboradores;
}
