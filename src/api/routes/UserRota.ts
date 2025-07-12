import { UserController } from "../../controller/UserController";
import { UsuarioServices } from "../../services/UsuarioServices";
import { UserRepository } from "../../repository/UserRepository";

import { PrismaClient } from "../../generated/prisma";
import { Api } from "./Api";

import { validar } from "../../middlewares/Validar";
import {
  criarUsuario,        // esquema de validação para criar
  atualizarUsuarioSchema,
  idParamSchema,
  loginSchema,
} from "../../useCases/validators/UserValidator";
import { TiposUsuarioController } from "../../controller/TipoUsuario";
import { AdminServices } from "../../services/TipoUsuarioServices";
import { TiposUsuarioRepositorio } from "../../repository/TipoUsuarioRepository";

const prisma = new PrismaClient();

export class UserRota {
  private readonly userController: UserController;
  private readonly tiposUsuarioController: TiposUsuarioController;

  constructor(private readonly api: Api) {
    this.userController = new UserController(
      new UsuarioServices(new UserRepository(prisma)),
    );
    this.tiposUsuarioController = new TiposUsuarioController(
      new AdminServices(new TiposUsuarioRepositorio()),
    );
  }

  /** fábrica estática */
  public static build(api: Api) {
    const instancia = new UserRota(api);
    instancia.addRotas();          // <- chama método que define as rotas
  }

  /** define todas as rotas */
  private addRotas() {
    /* ---------- LISTAR TODOS ---------- */
    this.api.addRotas(
      "/users",
      "GET",
      this.userController.getUsers.bind(this.userController),
    );

    /* ---------- BUSCAR POR ID ---------- */
    this.api.addRotas(
      "/users/:id",
      "GET",
      validar(idParamSchema, 'params'),            // valida params
      this.userController.getUserById.bind(this.userController),
    );

    /* ---------- CRIAR ---------- */
    this.api.addRotas(
      "/users",
      "POST",
      validar(criarUsuario, 'body'),       // valida body
      this.userController.createUser.bind(this.userController),
    );

    /* ---------- ATUALIZAR ---------- */
    this.api.addRotas(
      "/users/:id",
      "PUT",
      validar(idParamSchema, 'params'),            // valida params
      validar(atualizarUsuarioSchema, 'body'),   // valida body
      this.userController.updateUser.bind(this.userController),
    );

    /* ---------- DELETE ---------- */
    this.api.addRotas(
      "/users/:id",
      "DELETE",
      validar(idParamSchema, 'params'),
      this.userController.deleteUser.bind(this.userController),
    );

    /* ---------- LOGIN ---------- */
    this.api.addRotas(
      "/login",
      "POST",
      validar(loginSchema, 'body'),
      this.userController.login.bind(this.userController),
    );
    /* ---------- TIPOS DE USUARIO ---------- */
    this.api.addRotas(
      "/tipos-usuario",
      "GET",
      this.tiposUsuarioController.getTiposUsuario.bind(this.tiposUsuarioController),
    );
    this.api.addRotas(
      "/tipos-usuario",
      "POST",
      this.tiposUsuarioController.criarTipoUsuario.bind(this.tiposUsuarioController),
    );

   
    
  }
}
