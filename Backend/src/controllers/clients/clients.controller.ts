import { Request, Response } from "express";
import { db } from "../../../config/db.ts";
import { RowDataPacket } from "mysql2";

export async function getClients(req: Request, res: Response) {
    const { id, code, email, limit, nom, prenom } = req.body as {
        id?: number;
        nom?: string;
        prenom?: string;
        email?: string;
        code?: string;
        limit?: number;
    };
    const conditions: string[] = [];
    const values: (string | number)[] = [];

    if (id) {
        conditions.push("id_client = ?");
        values.push(id);
    }
    if (code) {
        conditions.push("code = ?");
        values.push(code);
    }
    if (nom) {
        conditions.push("nom like ?");
        values.push(`%${nom}%`);
    }
    if (prenom) {
        conditions.push("prenom like ?");
        values.push(`%${prenom}%`);
    }
    if (email) {
        conditions.push("email like ?");
        values.push(`%${email}%`);
    }

    let query = "select * from client";
    if (conditions.length > 0) query += ` where ${conditions.join(" and ")}`;
    if (limit) query += ` limit ${limit}`;

    const [clients] = await db.query<RowDataPacket[]>(query, values);

    res.json({ clients });
}
