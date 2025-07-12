import { MangasController } from "../../controller/MangasController";
import { Api } from "./Api";
import { MangasServices } from "../../services/MangasServices";
import { MangasRepository } from "../../repository/MangasRepository";
import { criarMangaSchema, atualizarMangaSchema, deletarMangaSchema } from "../../useCases/validators/mangas";
import { validar } from "../../middlewares/Validar";

export class MangasRota {
    private mangaController: MangasController;
    constructor(api: Api) {
        this.mangaController = new MangasController(new MangasServices(new MangasRepository()));
    }

    public static build(api: Api) {
        const instancia = new MangasRota(api);
        instancia.getRoutes(api);
    }

    getRoutes(api: Api) {
        api.addRotas("/mangas", "GET", this.mangaController.getMangas.bind(this.mangaController));
        api.addRotas("/rota-admin/mangas", "POST", validar(criarMangaSchema, 'body'), this.mangaController.createManga.bind(this.mangaController));
        api.addRotas("/mangas/:id", "GET", this.mangaController.buscarMangaId.bind(this.mangaController));
        api.addRotas("/rota-admin/mangas/:id", "PUT", validar(atualizarMangaSchema, 'body'), this.mangaController.atualizarManga.bind(this.mangaController));
        api.addRotas("/rota-admin/mangas/:id", "DELETE", validar(deletarMangaSchema, 'params'), this.mangaController.deletarManga.bind(this.mangaController));
    }
}