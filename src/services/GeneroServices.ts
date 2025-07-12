import { Generos } from "../domain/Generos";
import { GenerosRepository } from "../repository/GenerosRepository";
import { getIO } from "../utils/sockets/sokec";

export class GeneroServices {
    private generoRepo: GenerosRepository;
    constructor(private readonly generoR: GenerosRepository) {
        this.generoRepo = generoR;
    }

    async createGenero(genero: Generos): Promise<Generos> {
        try{
            const criarGenero = await this.generoRepo.criarGenero(genero);
            return Generos.build({
                id: criarGenero.id,
                nome: criarGenero.nome,
                animes: [],
                mangas: [],
            });
        } catch (error) {
            throw new Error('Erro ao criar gênero: ' + error);
        }
    }

    async listarGeneros(): Promise<Generos[]> {
        try{
            const listarGeneros = await this.generoRepo.listarGenero();
            return listarGeneros.map(genero => Generos.build({
                id: genero.id,
                nome: genero.nome,
                animes: [],
                mangas: [],
            }));
        } catch (error) {
            throw new Error('Erro ao listar gêneros: ' + error);
        }
    }

    async buscarGeneroPorId(id: string): Promise<Generos> {
        try{
            const buscarGenero = await this.generoRepo.buscarGeneroPorId(id);
            return Generos.build({
                id: buscarGenero.id,
                nome: buscarGenero.nome,
                animes: [],
                mangas: [],
            });
        } catch (error) {
            throw new Error('Erro ao buscar gênero por id: ' + error);
        }
    }

    async atualizarGenero(id: string, genero: Generos): Promise<Generos | null> {
        try{
            const mudarGenero = await this.generoRepo.atualizarGenero(id, genero);
            if (!mudarGenero) throw new Error('Gênero não encontrado');
            // ✅ Emite notificação para todos os clientes
            getIO().emit('notification', {
                type: 'genero_atualizado',  // ✅ Tipo de notificação
                message: 'Gênero atualizado com sucesso',
                data: {
                    genero: mudarGenero,  // ✅ Dados do gênero atualizado
                },
            });
            // ✅ Retorna o gênero atualizado
            return Generos.build({
                id: mudarGenero.id,
                nome: mudarGenero.nome,
                animes: [],
                mangas: [],
            });
        } catch (error) {
            throw new Error('Erro ao atualizar gênero: ' + error);
        }
    }

    async deletarGenero(id: string): Promise<void> {
        try{
            await this.generoRepo.deletarGenero(id);
        } catch (error) {
            throw new Error('Erro ao deletar gênero: ' + error);
        }
    }
}