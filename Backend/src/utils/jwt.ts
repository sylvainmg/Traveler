import jwt from "jsonwebtoken";

export function generateAccessToken(payload: jwt.JwtPayload) {
    return jwt.sign(payload, process.env.ACCESS_SECRET as string, {
        expiresIn: "15m",
    });
}

export function generateRefreshToken(payload: jwt.JwtPayload) {
    return jwt.sign(payload, process.env.REFRESH_SECRET as string, {
        expiresIn: "30d",
    });
}
