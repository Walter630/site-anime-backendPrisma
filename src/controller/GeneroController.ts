import { GeneroServices } from "../services/GeneroServices";
import { Generos } from "../domain/Generos";
import { Request, Response } from "express";
// Removido import do uuid devido ao erro de módulo não encontrado

export class GeneroController {
    private generoService: GeneroServices;
    constructor(private readonly generosService: GeneroServices) {
        this.generoService = generosService;
    }

    async criarGenero(req: Request, res: Response): Promise<Generos | Response> {
        try{
            const { nome } = req.body;
            const criarGenero = await this.generosService.createGenero(nome);
            return res.status(201).json({ message: 'Gênero criado com sucesso', data: criarGenero });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar gênero', error: error });
        }
    }

    async listarGeneros(req: Request, res: Response): Promise<Generos[] | Response> {
        try{
            const listarGeneros = await this.generosService.listarGeneros();
            return res.status(200).json({ message: 'Gêneros listados com sucesso', data: listarGeneros });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao listar gêneros', error: error });
        }
    }

    async buscarGeneroPorId(req: Request, res: Response): Promise<Generos | Response> {
        try{
            const { id } = req.params;
            const buscarGenero = await this.generosService.buscarGeneroPorId(id);
            return res.status(200).json({ message: 'Gênero encontrado com sucesso', data: buscarGenero });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar gênero por id', error: error });
        }
    }

    async atualizarGenero(req: Request, res: Response): Promise<Generos | Response> {
        try{
            const { id } = req.params;
            const { nome } = req.body;
            const genero = Generos.build({
                id: id,
            nome: nome,
            animes: [],
            mangas: [],
        });
            const atualizarGenero = await this.generosService.atualizarGenero(id, genero);
            return res.status(200).json({ message: 'Gênero atualizado com sucesso', data: atualizarGenero });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar gênero', error: error });
        }
    }

    async deletarGenero(req: Request, res: Response): Promise<void | Response> {
        try{
            const { id } = req.params;
            await this.generosService.deletarGenero(id);
            return res.status(200).json({ message: 'Gênero deletado com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar gênero', error: error });
        }   
    }
}