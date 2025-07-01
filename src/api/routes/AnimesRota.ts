import { AnimesController } from "../../controller/AnimesController";
import { AnimesRepository } from "../../repository/AnimesRepository";
import { AnimesServices } from "../../services/AnimeServices";
import { Api } from "./Api"; // sua classe responsável por abstrair o Express


export class AnimesApi {
    readonly animeController: AnimesController;
    private constructor(readonly api: Api) {
        this.animeController = new AnimesController(new AnimesServices(new AnimesRepository()));

    }

    public static build(api: Api) {
        const instancia = new AnimesApi(api);
        instancia.addRotas()
    }

    private addRotas() {
        this.api.addRotas("/animes", "GET", this.animeController.listarAnimes.bind(this.animeController));
        this.api.addRotas("/animes", "POST", this.animeController.createAnime.bind(this.animeController));
        this.api.addRotas("/animes/:id", "GET" , this.animeController.buscarAnimeId.bind(this.animeController));
        this.api.addRotas("/animes/:id", "DELETE", this.animeController.deletarAnime.bind(this.animeController));
    }
}