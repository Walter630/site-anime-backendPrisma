import { PrismaClient } from "@prisma/client";
import { Favorito } from "../domain/Favorito";
import { User } from "../domain/User";
import { Animes } from "../domain/Animes";

const prisma = new PrismaClient();

export class FavoritoRepository {
    async create(favorito: Favorito) {
        try {
            const criado = await prisma.favorito.create({
                data: {
                    id: favorito.id,
                    userId: favorito.user.id,
                    animeId: favorito.anime?.id,
                    mangaId: favorito.mangas?.id,
                },
            });
            return criado;
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao criar favorito.");
        }
    }

    async listar(): Promise<Favorito[]> {
        try {
            const resultados = await prisma.favorito.findMany({
                include: {
                    user: true,
                    anime: true,
                    manga: true,
                },
            });

            return resultados.map(f => Favorito.build({
                id: f.id,
                user: new User({
                    id: f.user.id,
                    nome: f.user.nome,
                    email: f.user.email,
                    password: f.user.password,
                    createdAt: f.user.createdAt,
                    updatedAt: f.user.updatedAt,
                }),
                anime: f.anime ? new Animes({
                    id: f.anime.id,
                    title: f.anime.title,
                    image: f.anime.image,
                    description: f.anime.description,
                    episodios: f.anime.episodios,
                    dataCreateAt: f.anime.dataCreateAt,
                    dataUpdateAt: f.anime.dataUpdateAt,
                    userId: f.anime.userId,
                    adminId: f.anime.adminId
                }) : undefined,
                mangas: f.manga ? {
                    ...f.manga // ou instanciar se tiver domínio Mangas
                } : undefined,
            }));
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao listar favoritos.");
        }
    }

    async deletar(id: string) {
        try {
            const deletado = await prisma.favorito.delete({
                where: { id },
            });
            return deletado;
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao deletar favorito.");
        }
    }

    async buscarPorUsuario(userId: string): Promise<Favorito[]> {
        try {
            const favoritos = await prisma.favorito.findMany({
                where: { userId },
                include: {
                    user: true,
                    anime: true,
                    manga: true,
                },
            });

            return favoritos.map(f => Favorito.build({
                id: f.id,
                user: new User({
                    id: f.user.id,
                    nome: f.user.nome,
                    email: f.user.email,
                    password: f.user.password,
                    createdAt: f.user.createdAt,
                    updatedAt: f.user.updatedAt,
                }),
                anime: f.anime ? new Animes({
                    id: f.anime.id,
                    title: f.anime.title,
                    image: f.anime.image,
                    description: f.anime.description,
                    episodios: f.anime.episodios,
                    dataCreateAt: f.anime.dataCreateAt,
                    dataUpdateAt: f.anime.dataUpdateAt,
                    userId: f.anime.userId,
                    adminId: f.anime.adminId
                }) : undefined,
                mangas: f.manga ?? undefined,
            }));
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao buscar favoritos do usuário.");
        }
    }
}
