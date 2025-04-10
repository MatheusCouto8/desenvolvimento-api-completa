import eventoModel from "../models/eventoModel.js";

class EventoController {
  // GET /eventos
  async getAll(req, res) {
    try {
      const eventos = await eventoModel.findAll();
      res.json(eventos);
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
      res.status(500).json({ error: "Erro ao buscar eventos" });
    }
  }

  // GET /eventos/:id
  async getById(req, res) {
    try {
      const { id } = req.params;

      const evento = await eventoModel.findById(id);

      if (!evento) {
        return res.status(404).json({ error: "Evento não encontrado" });
      }

      res.json(evento);
    } catch (error) {
      console.error("Erro ao buscar evento:", error);
      res.status(500).json({ error: "Erro ao buscar evento" });
    }
  }

  // POST /eventos
  async create(req, res) {
    try {
      // Validação básica
      const {
        title,
        description,
        date,
        location,
        capacity,
        category,
        price,
      } = req.body;

      if (
        !title ||
        !description ||
        !date ||
        !location ||
        !capacity ||
        !category ||
        !price
      ) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios" });
      }

      // Criar o novo evento
      const newEvento = await eventoModel.create(
        title,
        description,
        date,
        location,
        capacity,
        category,
        price
      );

      if (!newEvento) {
        return res.status(400).json({ error: "Erro ao criar evento" });
      }

      res.status(201).json(newEvento);
    } catch (error) {
      console.error("Erro ao criar evento:", error);
      res.status(500).json({ error: "Erro ao criar evento" });
    }
  }

  // PUT /eventos/:id
   // PUT /eventos/:id
   async update(req, res) {
    try {
      const { id } = req.params;
      const {
        title,
        description,
        date,
        location,
        capacity,
        category,
        price,
      } = req.body;

      // Atualizar o evento com os dados fornecidos
      const updatedEvento = await eventoModel.update(
        id,
        title,
        description,
        date,
        location,
        capacity,
        category,
        price
      );

      if (!updatedEvento) {
        return res.status(404).json({ error: "Evento não encontrado" });
      }

      res.json(updatedEvento);
    } catch (error) {
      console.error("Erro ao atualizar evento:", error);
      res.status(500).json({ error: "Erro ao atualizar evento" });
    }
  }

  // DELETE /eventos/:id
  async delete(req, res) {
    try {
      const { id } = req.params;

      // Remover o evento
      const result = await eventoModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Evento não encontrado" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover evento:", error);
      res.status(500).json({ error: "Erro ao remover evento" });
    }
  }
}

export default new EventoController();