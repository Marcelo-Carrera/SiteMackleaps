import db from "./../../../../db.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(db.projetos);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { msg: "Falha ao recuperar informações!" },
      { status: 500 }
    );
  }
}
