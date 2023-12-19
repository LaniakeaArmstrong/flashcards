import { pool } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const [results] = await pool.promise().execute(`SELECT * FROM \`cards\` WHERE ID = ${ params.id }`);
        if (results.length === 0) {
            return NextResponse.json({ error: "No existe esa flashcard" }, { status: 404 });
        } else {
            return NextResponse.json(results);
        }
    } catch (error) {
        return NextResponse.json({ error: "Error al obtener flashcards" }, { status: 400 })
    }
}

//TODO: terminar esto pues...
export async function POST(request, { params }) {

}