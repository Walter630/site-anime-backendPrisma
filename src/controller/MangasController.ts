import { Mangas } from "../domain/Mangas";
import { MangasServices } from "../services/MangasServices";
import { Request, Response } from "express";
import { getIO } from "../utils/sockets/sokec";

export class MangasController {
    constructor(private readonly mangaService: MangasServices) {}
    async getMangas(req: Request, res: Response): Promise<Mangas[] | Response> {
        try {
            const mangas = await this.mangaService.listarMangas();
            if (!mangas || mangas.length === 0) {
                return res.status(404).json({ error: 'Nenhum manga encontrado' });
            }
            getIO().emit('notification', {
                type: 'manga_list',
                message: 'Lista de mangas atualizada',
                data: {
                    mangas: mangas.map(manga => ({
                        id: manga.id,
                        title: manga.title,
                        image: manga.image,
                        description: manga.description,
                    })),
                }
            });
            return res.status(200).json(mangas);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao listar mangas' });
        }
    }
    async createManga(req: Request, res: Response): Promise<Mangas | Response> {
        try {
            const { title, description, image } = req.body;
            const manga = Mangas.create(title, description, image);
            const createdManga = await this.mangaService.createManga(manga);
            return res.status(201).json(createdManga);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao criar manga' });
        }
    }
    async atualizarManga(req: Request, res: Response): Promise<Mangas | Response> {
        try {
            const { id } = req.params;
            const { title, description, image } = req.body;
            const manga = Mangas.create(title, description, image);
            const updatedManga = await this.mangaService.atualizarManga(id, manga);
            return res.status(200).json(updatedManga);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao atualizar manga' });
        }
    }
    async buscarMangaId(req: Request, res: Response): Promise<Mangas | Response> {
        const { id } = req.params;
        try {
            const manga = await this.mangaService.bucsarMangaPorId(id);
            if (!manga) {
                return res.status(404).json({ error: 'Manga não encontrado' });
            }
            return res.status(200).json(manga);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao buscar manga' });
        }
    }
    async deletarManga(req: Request, res: Response): Promise<Response> {
        try {
            await this.mangaService.deletarManga(req.params.id, req.body.adminId);
            return res.status(200).json({ message: 'Manga deletado com sucesso' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao deletar manga' });
        }
    }
}