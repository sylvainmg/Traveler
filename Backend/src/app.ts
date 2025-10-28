import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.route.ts";
import clientsRoutes from "./routes/clients.route.ts";
import adminsRoutes from "./routes/admin.route.ts";
import { verifyAccessToken } from "./middlewares/accessToken.middleware.ts";
import rootRoute from "./routes/root.route.ts";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Auths
app.use("/admin/auth", adminsRoutes); // admin
app.use("/auth", authRoutes); // client

// Protected routes
app.use(verifyAccessToken); // middleware

app.use(rootRoute);
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
