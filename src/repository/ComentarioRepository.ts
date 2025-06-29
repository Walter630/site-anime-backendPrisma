
import { PrismaClient } from "@prisma/client";
import { Comentario } from "../domain/Comentario";
import { User } from "../domain/User";
import { Animes } from "../domain/Animes";

const prisma = new PrismaClient();

export class ComentarioRepository {
  async create(comentario: Comentario) {
    try {
      const novoComentario = await prisma.comentario.create({
        data: {
          id: comentario.id,
          texto: comentario.texto,
          userId: comentario.user.id,
          animeId: comentario.anime?.id,
          createdAt: comentario.createdAt,
        },
      });

      return novoComentario;
    } catch (error) {
      console.error("Erro ao criar comentário:", error);
      throw new Error("Erro ao criar comentário");
    }
  }

  async listar(): Promise<Comentario[]> {
    try {
      const comentarios = await prisma.comentario.findMany({
        include: {
          user: true,
          anime: true,
        },
      });

      return comentarios.map((c) =>
        Comentario.create({
          id: c.id,
          texto: c.texto,
          createdAt: c.createdAt,
          user: User.create({
            nome: c.user.nome,
            email: c.user.email,
            password: c.user.password,
          }),
          anime: c.anime
            ? new Animes({
                id: c.anime.id,
                title: c.anime.title,
                image: c.anime.image,
                description: c.anime.description,
                episodios: c.anime.episodios,
                dataCreateAt: c.anime.dataCreateAt,
                dataUpdateAt: c.anime.dataUpdateAt,
                adminId: c.anime.adminId,
                userId: c.anime.userId,
              })
            : undefined,
        })
      );
    } catch (error) {
      console.error("Erro ao listar comentários:", error);
      throw new Error("Erro ao listar comentários");
    }
  }

  async buscarPorId(id: string): Promise<Comentario | null> {
    try {
      const comentario = await prisma.comentario.findUnique({
        where: { id },
        include: {
          user: true,
          anime: true,
        },
      });

      if (!comentario) return null;

      return Comentario.create({
        id: comentario.id,
        texto: comentario.texto,
        createdAt: comentario.createdAt,
        user: User.create({
          nome: comentario.user.nome,
          email: comentario.user.email,
          password: comentario.user.password,
          createdAt: comentario.user.createdAt,
          updatedAt: comentario.user.updatedAt,
        }),
        anime: comentario.anime
          ? new Animes({
              id: comentario.anime.id,
              title: comentario.anime.title,
              image: comentario.anime.image,
              description: comentario.anime.description,
              episodios: comentario.anime.episodios,
              dataCreateAt: comentario.anime.dataCreateAt,
              dataUpdateAt: comentario.anime.dataUpdateAt,
              adminId: comentario.anime.adminId,
              userId: comentario.anime.userId,
            })
          : undefined,
      });
    } catch (error) {
      console.error("Erro ao buscar comentário:", error);
      throw new Error("Erro ao buscar comentário");
    }
  }

  async deletar(id: string) {
    try {
      await prisma.comentario.delete({
        where: { id },
      });
    } catch (error) {
      console.error("Erro ao deletar comentário:", error);
      throw new Error("Erro ao deletar comentário");
    }
  }
}
