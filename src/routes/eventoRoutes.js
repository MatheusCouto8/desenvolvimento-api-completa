import express from "express";
import eventoController from "../controllers/eventoController.js";
const router = express.Router();
router.get("/", eventoController.getAll);
router.post("/", eventoController.create);
router.put("/:id", eventoController.update);
router.delete("/:id", eventoController.delete);
export default router;
