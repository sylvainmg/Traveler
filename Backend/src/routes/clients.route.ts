import { Router } from "express";
import { getClients } from "../controllers/clients/clients.controller.ts";

const router = Router();

router.post("/", getClients);

export default router;
