import { Request, Response } from "express";
import { db } from "../../../config/db.ts";
import { RowDataPacket } from "mysql2";

export async function getClients(req: Request, res: Response) {
    const [clients] = await db.query<RowDataPacket[]>(
        "select * from client limit 500"
    );

    res.json({ clients });
}
