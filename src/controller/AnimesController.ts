import { Request, Response } from "express";
import { Animes } from "../domain/Animes";
import { AnimesServices } from "../services/AnimeServices";

export class AnimesController {
    private animeService: AnimesServices;

    constructor(private readonly animeS: AnimesServices) {
        this.animeService = animeS;
    }
    async listarAnimes(req: Request, res: Response): Promise<Animes[] | Response> {
        try {
            const animes = await this.animeService.listarAnimes();
            if (!animes || animes.length === 0) {
                return res.status(404).json({ error: 'Nenhum anime encontrado' });
            }
            return res.status(200).json(animes);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao listar animes' });
        }
    }
    async createAnime(req: Request, res: Response): Promise<Animes | Response> {
        try {
            const { title, description, image, episodios } = req.body;
            const anime = Animes.create(title, description, image, episodios);
            const createdAnime = await this.animeService.createAnime(anime);
            return res.status(201).json(createdAnime);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao criar anime' });
        }
    }

    async buscarAnimeId(req: Request, res: Response): Promise<Animes | Response> {
        const { id } = req.params;
        try {
            const anime = await this.animeService.buscarAnimeId(id);
            return res.status(200).json(anime);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao buscar anime' });
        }
    }
    async deletarAnime(req: Request, res: Response): Promise<Response> {
        try {
           await this.animeService.deletarAnime(req.params.id, req.body.adminId);
            return res.status(200).json({ message: 'Anime deletado com sucesso' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao deletar anime' });
        }
    }
}