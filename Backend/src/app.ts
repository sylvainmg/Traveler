import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.ts";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/auth", authRoutes);

// Serveur
const PORT = process.env.PORT;
app.listen(PORT || 3000, () => {
    console.log(`Serveur lancé sur le port ${PORT}...`);
});
