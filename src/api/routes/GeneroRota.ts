import { GeneroController } from "../../controller/GeneroController";
import { GeneroServices } from "../../services/GeneroServices";
import { GenerosRepository } from "../../repository/GenerosRepository";
import { Api } from "./Api";
import { criarGenero, atualizarGenero, deletarGenero } from "../../useCases/validators/Generos";
import { validar } from "../../middlewares/Validar";

export class GeneroRota {
    private generoController: GeneroController;
    constructor(readonly api: Api) {
        this.generoController = new GeneroController(new GeneroServices(new GenerosRepository()));
    }

    public static build(api: Api) {
        const instancia = new GeneroRota(api);
        instancia.addRotas();
    }
    
    private addRotas() {
        this.api.addRotas("/genero", "GET", this.generoController.listarGeneros.bind(this.generoController));
        this.api.addRotas("/genero/:id", "GET", this.generoController.buscarGeneroPorId.bind(this.generoController));
        this.api.addRotas("/genero", "POST", [validar(criarGenero), this.generoController.criarGenero.bind(this.generoController)]);
        this.api.addRotas("/genero/:id", "PUT", [validar(atualizarGenero), this.generoController.atualizarGenero.bind(this.generoController)]);
        this.api.addRotas("/genero/:id", "DELETE", [validar(deletarGenero), this.generoController.deletarGenero.bind(this.generoController)]);
    }
    
}
