import { pool } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const [results] = await pool.promise().execute("SELECT * FROM `cards`");
        return NextResponse.json(results)
    } catch (error) {
        console.error(error)
    }

}

export async function POST(request) {
    try {
        const datos = await request.json();

        const columnas = Object.keys(datos).join(", ");
        const marcadores = Object.keys(datos).map(() => "?").join(", ");
        const valores = Object.values(datos);

        const sql = `INSERT INTO \`cards\` (${columnas}) VALUES (${marcadores})`;

        if (Object.keys(datos).length > 0) {
            const [results] = await pool.promise().execute(sql, valores);
            return NextResponse.json(results)
        } else {
            return NextResponse.json({ error: "No se ingresó ninguna tarjeta" })
        }
    } catch (error) {
        console.error(error)
    }
}
