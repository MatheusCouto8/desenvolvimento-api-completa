import prisma from "../../prisma/client.js";

class EventoModel {
  // Obter todos os animes
  async findAll() {
    const eventos = await prisma.evento.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(eventos);

    return eventos;
  }

  // Obter um anime pelo ID
  async findById(id) {
    const evento = await prisma.evento.findUnique({
      where: {
        id: Number(id),
      },
    });

    return evento;
  }

  // Criar um novo anime
  async create(
    title,
        description,
        date,
        location,
        capacity,
        category,
        price
  ) {
    const newEvento = await prisma.evento.create({
      data: {
        title,
        description,
        date,
        location,
        capacity,
        category,
        price
      },
    });

    return newEvento;
  }

  // Atualizar um anime
  async update(
    id,
    title,
        description,
        date,
        location,
        capacity,
        category,
        price
  ) {
    const evento = await this.findById(id);

    if (!evento) {
      return null;
    }

    // Atualize o evento existente com os novos dados
    const data = {};
    if (title !== undefined) {
      data.title = title;
    }
    if (description !== undefined) {
      data.description = description;
    }
    if (date !== undefined) {
      data.date = episodes;
    }
    if (location !== undefined) {
      data.location = releaseYear;
    }
    if (capacity !== undefined) {
      data.capacity = studio;
    }
    if (category !== undefined) {
      data.category = genres;
    }
    if (price !== undefined) {
      data.price = rating;
    }
    

    const eventoUpdated = await prisma.evento.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return eventoUpdated;
  }

  // Remover um anime
  async delete(id) {
    const evento = await this.findById(id);

    if (!evento) {
      return null;
    }

    await prisma.evento.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new EventoModel();