import { Request, Response } from "express";
import { Client, DBClient } from "../models/login.model.ts";
import { db } from "../../config/db.ts";
import bcrypt from "bcryptjs";
import { RowDataPacket } from "mysql2";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.ts";

export async function login(req: Request, res: Response) {
    const { email, password }: Client = req.body;
    const [rows] = await db.query<Client & RowDataPacket[]>(
        "select * from client where email = ?",
        [email]
    );
    const user = rows[0] as DBClient;

    if (!user) return res.status(404).json({ message: "User not found." });

    const match = await bcrypt.compare(password, user.PASSWORD);
    if (!match) return res.status(401).json({ message: "Unauthorized." });
    else {
        const accessToken = generateAccessToken({ id: user.EMAIL });
        const refreshToken = generateRefreshToken({ id: user.EMAIL });
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: true,
        });
        res.status(200).json({
            message: "Login successful.",
            token: accessToken,
        });
    }
}

export function token(req: Request, res: Response) {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(403);

    const accessToken = generateAccessToken({ id: req.body.user });
    res.json({ accessToken });
}
