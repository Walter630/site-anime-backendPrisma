import { Mangas } from "../domain/Mangas";
import { MangasServices } from "../services/MangasServices";
import { Request, Response } from "express";

export class MangasController {
    constructor(private readonly mangaService: MangasServices) {}
    async getMangas(req: Request, res: Response): Promise<Mangas[] | Response> {
        try {
            const mangas = await this.mangaService.listarMangas();
            if (!mangas || mangas.length === 0) {
                return res.status(404).json({ error: 'Nenhum manga encontrado' });
            }
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