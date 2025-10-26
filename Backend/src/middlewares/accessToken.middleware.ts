import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function verifyAccessToken(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;
    const token = authHeader && (authHeader.split(" ")[1] as string);

    jwt.verify(token!, process.env.ACCESS_SECRET as string, (err, user) => {
        if (err) return res.sendStatus(403);
        (req as any).user = user;
        next();
    });
}
