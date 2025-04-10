import express from "express";
import eventoController from "../controllers/eventoController.js";

const router = express.Router();

// Rota para obter todos os eventos
router.get("/", eventoController.getAll);

// Rota para obter um evento pelo ID
router.get("/:id", eventoController.getById);

// Rota para criar um novo evento
router.post("/", eventoController.create);

// Rota para atualizar um evento
router.put("/:id", eventoController.update);

// Rota para deletar um evento
router.delete("/:id", eventoController.delete);

export default router;