import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.ts";
import clientsRoutes from "./routes/clients.route.ts";
import { verifyAccessToken } from "./middlewares/accessToken.middleware.ts";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Auths
app.use("/auth", authRoutes);

// Protected routes
app.use(verifyAccessToken); // middleware

app.use("/clients", clientsRoutes);
app.post("/profile", (req, res) => {
    res.json({
        user: (req as any).user,
        message: "Bienvenue sur la route protégée.",
    });
});

// Serveur
const PORT = process.env.PORT;
app.listen(PORT || 3000, () => {
    console.log(`Serveur lancé sur le port ${PORT}...`);
});
