import express from "express";
import { distributeFlow } from "../controllers/userController.js";

const router = express.Router();

router.post("/distribute/:userId", distributeFlow);

export default router;
