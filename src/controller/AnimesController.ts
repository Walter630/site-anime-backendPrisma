import { Request, Response } from "express";
import { Animes } from "../domain/Animes";
import { AnimesServices } from "../services/AnimeServices";

export class AnimesController {
  constructor(private readonly animeService: AnimesServices) {}

  /** GET /animes */
  listarAnimes = async (_: Request, res: Response) => {
    try {
      const animes = await this.animeService.listarAnimes();
      if (!animes.length) return res.status(404).json({ error: "Nenhum anime encontrado" });
      res.status(200).json(animes);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Erro ao listar animes" });
    }
  };

  /** POST /animes (admin only) */
  createAnime = async (req: Request, res: Response) => {
    try {
      const { title, description, image, episodios, generos } = req.body;
      const anime = Animes.create(title, image, description, episodios, generos);
      anime.userId = req.user?.id!;          // <- salva quem criou
      const created = await this.animeService.createAnime(anime);
      console.log(created)
      res.status(201).json(created);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Erro ao criar anime" });
    }
  };

  /** GET /animes/:id */
  buscarAnimeId = async (req: Request, res: Response) => {
    try {
      const anime = await this.animeService.buscarAnimeId(req.params.id);
      res.status(200).json(anime);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Erro ao buscar anime" });
    }
  };

  /** DELETE /animes/:id (admin only) */
  deletarAnime = async (req: Request, res: Response) => {
    try {
      await this.animeService.deletarAnime(req.params.id, req.body.userId!);
      res.status(200).json({ message: "Anime deletado com sucesso" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Erro ao deletar anime" });
    }
  };
  atualizarAnime = async (req: Request, res: Response) => {
    try {
      await this.animeService.atualizarAnime(req.params.id, req.body.userId!, req.body);
      res.status(200).json({ message: "Anime atualizado com sucesso" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Erro ao atualizar anime" });
    }
  };
}
