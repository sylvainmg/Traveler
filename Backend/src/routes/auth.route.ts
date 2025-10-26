import { Router } from "express";
import { login, token } from "../controllers/auth.controller.ts";

const router = Router();

router.post("/login", login);
router.post("/token", token);

export default router;
