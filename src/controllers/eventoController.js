import eventoModel from "../models/eventoModel.js";

class EventoController {
  // GET /api/animes
  async getAllEventos(req, res) {
    try {
      const eventos = await EventoModel.findAll();
      res.json(eventos);
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
      res.status(500).json({ error: "Erro ao buscar eventos" });
    }
  }

  // GET /api/animes/:id
  async getEventoById(req, res) {
    try {
      const { id } = req.params;

      const evento = await EventoModel.findById(id);

      if (!evento) {
        return res.status(404).json({ error: "Evento não encontrado" });
      }

      res.json(evento);
    } catch (error) {
      console.error("Erro ao buscar evento:", error);
      res.status(500).json({ error: "Erro ao buscar evento" });
    }
  }

  // POST /api/animes
  async createEvento(req, res) {
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

      // Verifica se o título do anime foi fornecido

      if (
        !title ||
        !description ||
        !date ||
        !location ||
        !category ||
        !capacity ||
        !price
      ) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios" });
      }

      // Criar o novo anime
      const newEvento = await EventoModel.create(
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

  // PUT /api/animes/:id
  async updateAnime(req, res) {
    try {
      const { id } = req.params;
      const {
        title,
        description,
        episodes,
        releaseYear,
        studio,
        genres,
        rating,
        imageUrl,
      } = req.body;

      // Atualizar o anime
      const updatedAnime = await AnimeModel.update(
        id,
        title,
        description,
        episodes,
        releaseYear,
        studio,
        genres,
        rating,
        imageUrl
      );

      if (!updatedAnime) {
        return res.status(404).json({ error: "Anime não encontrado" });
      }

      res.json(updatedAnime);
    } catch (error) {
      console.error("Erro ao atualizar anime:", error);
      res.status(500).json({ error: "Erro ao atualizar anime" });
    }
  }

  // DELETE /api/animes/:id
  async deleteAnime(req, res) {
    try {
      const { id } = req.params;

      // Remover o anime
      const result = await AnimeModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Anime não encontrado" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover anime:", error);
      res.status(500).json({ error: "Erro ao remover anime" });
    }
  }
}

export default new AnimeController();