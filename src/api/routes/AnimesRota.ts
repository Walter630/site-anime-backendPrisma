import { AnimesController } from "../../controller/AnimesController";
import { AnimesRepository } from "../../repository/AnimesRepository";
import { AnimesServices } from "../../services/AnimeServices";
import { Api } from "./Api";

import { requireAdmin } from "../../middlewares/RiqueriAdmin";
import { verifyToken as verifyTokenAuth } from "../../middlewares/AuthMiddleware";
import { criarAnimeSchema, atualizarAnimeSchema, deletarAnimeSchema } from "../../useCases/validators/animes";
import { validar } from "../../middlewares/Validar";

export class AnimesApi {
  readonly animeController: AnimesController;

  private constructor(readonly api: Api) {
    const repo = new AnimesRepository();
    const service = new AnimesServices(repo);
    this.animeController = new AnimesController(service);
  }

  public static build(api: Api) {
    const instancia = new AnimesApi(api);
    instancia.addRotas();
  }

  private addRotas() {
    // ✅ Pública: listar todos
    this.api.addRotas("/animes", "GET", this.animeController.listarAnimes.bind(this.animeController));

    // ✅ Protegidas: requer token + admin

    this.api.addRotas("/rota-admin/animes/:id", "DELETE", [
      verifyTokenAuth,
      requireAdmin,
      validar(deletarAnimeSchema, 'params'),
      this.animeController.deletarAnime.bind(this.animeController),
    ]);

    this.api.addRotas("/rota-admin/animes", "POST", [
        verifyTokenAuth,
        requireAdmin,
        validar(criarAnimeSchema, 'body'),
        this.animeController.createAnime.bind(this.animeController),
      ]);
    
    this.api.addRotas("/rota-admin/animes/:id", "PUT", [
        verifyTokenAuth,
        requireAdmin,
        validar(atualizarAnimeSchema, 'body'),
        this.animeController.atualizarAnime.bind(this.animeController),
      ]);

    // ✅ Pública: buscar por ID
    this.api.addRotas("/animes/:id", "GET", this.animeController.buscarAnimeId.bind(this.animeController));
  }
}
