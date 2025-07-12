import User from "../domain/User";
import { UsuarioServices } from "../services/UsuarioServices";
import { Request, Response } from "express";

export class UserController {

    constructor(private readonly userService: UsuarioServices) {
        this.userService = userService;
    }

    
    async getUsers(req: Request, res: Response) {
        try {
            const users = await this.userService.listar();
            if (users.length === 0) {
                res.status(404).json({ message: "Nenhum usuário encontrado" });
                return;
            }
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar usuários" });
        }
       
    }

    async getUserById(req: Request, res: Response)  {
        try {
            const id = req.params.id as string;
            const user = await this.userService.buscarUsuario(id);
            console.log(user)
            res.status(200).json(user);
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Erro ao buscar usuário" });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const user = await this.userService.login(email, password);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: "Erro ao fazer login" });
        }
    }

    async createUser(req: Request, res: Response) {
        try {
            const newUser = await this.userService.criarUsuario(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: "Erro ao criar usuário" });
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = req.body;
            const updatedUser = await this.userService.atuaizarUser(id, user);
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar usuário" });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await this.userService.deletarUser(id);
            res.status(200).json({ message: "Usuário deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar usuário" });
        }
    }
}
