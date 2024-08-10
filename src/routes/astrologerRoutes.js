import express from "express";
import {
  getAllAstrologer,
  toggleAstrologer,
} from "../controllers/astrologerController.js";

const router = express.Router();

router.get("/", getAllAstrologer);
router.patch("/:id/toggle-top", toggleAstrologer);

export default router;
