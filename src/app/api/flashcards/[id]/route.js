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
export async function PUT(request, { params }) {
    try {
        const flashcardModification = await request.json()

        const singleQuote = "'"
        const question = singleQuote + flashcardModification["Question"] + singleQuote
        const answer = singleQuote + flashcardModification["Answer"] + singleQuote
        const modifiedFlashcard = await pool.promise().execute(`UPDATE \`cards\` SET Question = ${ question }, Answer = ${ answer } WHERE ID = ${ params.id }`)

        return NextResponse.json(modifiedFlashcard)
    } catch (error) {
        return NextResponse.json({ error: "Error al modificar flashcard" }, { status: 500 })
    }
}

export async function DELETE(request, { params }) {
    try {
        const deletedFlashcard = await pool.promise().execute(`DELETE FROM \`cards\` WHERE ID IN (${ params.id })`)
        return NextResponse.json(deletedFlashcard)
    } catch (error) {
        return NextResponse.json({error: "Error al eliminar flashcard"}, {status: 500})
    }
}