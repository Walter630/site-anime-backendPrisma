import { Api } from "./Api";
import { TiposUsuarioController } from "../../controller/TipoUsuario";
import { AdminServices } from "../../services/TipoUsuarioServices";
import { TiposUsuarioRepositorio } from "../../repository/TipoUsuarioRepository";

import { validar } from "../../middlewares/Validar";
import {
  criarTipoUsuarioSchema,
  seTornaAdminSchema,
} from "../../useCases/validators/TiposUsuarioValidators";

export class Rotas {
    private readonly tiposUsuarioController: TiposUsuarioController;
    constructor(private readonly api: Api) {
        this.tiposUsuarioController = new TiposUsuarioController(
            new AdminServices(new TiposUsuarioRepositorio()),
        );
    }
    public static build(api: Api) {
        const instancia = new Rotas(api);
        instancia.addRotas();
        return instancia;
    }
    private addRotas() {
        this.api.addRotas("/tipos-usuario", "GET", this.tiposUsuarioController.getTiposUsuario.bind(this.tiposUsuarioController));
        this.api.addRotas("/tipos-usuario", "POST", validar(criarTipoUsuarioSchema, 'body'), this.tiposUsuarioController.criarTipoUsuario.bind(this.tiposUsuarioController));
        this.api.addRotas("/tipos-usuario/:id", "PUT", validar(seTornaAdminSchema, 'body'), this.tiposUsuarioController.atualizarTipoUsuario.bind(this.tiposUsuarioController));
    }

}