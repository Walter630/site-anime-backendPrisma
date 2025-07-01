import { Request, Response } from "express";
import { Animes } from "../domain/Animes";
import { AnimesServices } from "../services/AnimeServices";

export class AnimesController {
  constructor(private readonly animeService: AnimesServices) {}

  /** GET /animes */
  listarAnimes = async (req: Request, res: Response): Promise<void> => {
    try {
      const animes = await this.animeService.listarAnimes();

      if (!animes.length) {
        res.status(404).json({ error: "Nenhum anime encontrado" });
        return;
      }

      res.status(200).json(animes);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao listar animes" });
    }
  };

  /** POST /animes */
  createAnime = async (req: Request, res: Response): Promise<void> => {
    try {
      const { title, description, image, episodios } = req.body;
      const anime = Animes.create(title, image, description, episodios);
      // You may need to set userId separately if required:
      // anime.userId = req.user.id;
      const created = await this.animeService.createAnime(anime);
      res.status(201).json(created);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao criar anime" });
    }
  };

  /** GET /animes/:id */
  buscarAnimeId = async (req: Request, res: Response): Promise<void> => {
    try {
      const anime = await this.animeService.buscarAnimeId(req.params.id);
      res.status(200).json(anime);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao buscar anime" });
    }
  };

  /** DELETE /animes/:id */
  deletarAnime = async (req: Request, res: Response): Promise<void> => {
    try {
      await this.animeService.deletarAnime(req.params.id, req.body.adminId);
      res.status(200).json({ message: "Anime deletado com sucesso" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao deletar anime" });
    }
  };
}
