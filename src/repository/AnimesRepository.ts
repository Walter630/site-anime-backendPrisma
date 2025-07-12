import { PrismaClient } from "../generated/prisma";
import { Animes } from "../domain/Animes";
import { Generos } from "../domain/Generos";

const prisma = new PrismaClient()
export class AnimesRepository {
    async create(animes: Animes) {
        try {
            if (!animes.userId) {
                throw new Error('userId é obrigatório');
            }
            if (typeof animes.episodios !== 'number') {
                throw new Error('Número de episódios é obrigatório e deve ser inteiro');
            }
            
            const criarAnime = await prisma.animes.create({
                data: {
                    title: animes.title,
                    description: animes.description,
                    image: animes.image,
                    episodios: animes.episodios,
                    userId: animes.userId
                },
            });
    
            return criarAnime;
        } catch (err) {
            console.error('Erro ao criar anime (repositorio):', err);
            throw new Error('Erro ao criar anime');
        }
    }


    async listarAnimes(): Promise<Animes[]> {
    try {
        const listar = await prisma.animes.findMany();
        
        return listar.map((linha) =>
            Animes.build({
                id: linha.id,
                title: linha.title,
                image: linha.image,
                description: linha.description,
                episodios: linha.episodios,
                dataCreateAt: linha.createdAt,
                dataUpdateAt: linha.updatedAt,
                generos: [],
                userId: linha.userId,
                // Adicione outros campos se necessário
            })
        );
    } catch (err) {
        console.log(err);
        throw new Error('Erro ao listar animes');
    }
}

    async buscarPorId(id: string) {
        try{
            const buscar = await prisma.animes.findUnique({where: {id: id}})
            if(!buscar) throw new Error('Erro ao buscar')
            return Animes.build({
                id: buscar.id,
                title: buscar.title,
                image: buscar.image,
                description: buscar.description,
                episodios: buscar.episodios,
                dataCreateAt: buscar.createdAt,
                dataUpdateAt: buscar.updatedAt,
                userId: buscar.userId,
                generos: []
            })
        }catch(err){
            console.log(err)
            throw new Error('Erro ao buscar por id')
        }
    }
    async deletar(id: string): Promise<boolean> {
        try{
            await prisma.animes.delete({where: {id: id}})
            return true
        }catch(err){
            console.log(err)
            throw new Error('Erro ao deletar user')
        }
    }

    async atualizar(id: string, animes: Animes): Promise<void> {
        try{
            await prisma.animes.updateMany({
                data: {
                        title: animes.title,
                        image: animes.image,
                        description: animes.description,
                        episodios: animes.episodios
                },
                where: {id: id}
            })
        }catch(err){
            console.log(err)
            throw new Error('Opaa nao foi possivel atualizar')
        }
    }
}