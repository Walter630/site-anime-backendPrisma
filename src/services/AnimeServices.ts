import { AnimesRepository } from './../repository/AnimesRepository';
import { Animes } from "../domain/Animes";
import { getIO } from '../utils/sockets/sokec';

export class AnimesServices {
    private animeRepo: AnimesRepository;
    constructor(private readonly animeR: AnimesRepository){
        this.animeRepo = animeR;
    }
    async createAnime(anime: Animes): Promise<Animes> {
        try{
            const criar = await this.animeRepo.create(anime);
            if(!criar.adminId){
                throw new Error('userId obrigatório');
            }
            getIO().emit('notification', {
                type: 'anime_created',
                message: 'Um novo anime foi criado',
                data: {
                    id: criar.id,
                    title: criar.title,
                    image: criar.image,
                    description: criar.description,
                }
            });
            console.log(criar)
            return Animes.build({
               ...criar
            });
        }catch(err){
            console.log(err)
            throw new Error('erro ao criar anime')
        }
    };

    async listarAnimes(): Promise<Animes[]> {
        try{
            const listar = await this.animeRepo.listarAnimes()
            return listar.map((linha) => Animes.build({
                id: linha.id,
                title: linha.title,
                image: linha.image,
                description: linha.description,
                episodios: linha.episodios,
                dataCreateAt: linha.dataCreateAt,
                dataUpdateAt: linha.dataUpdateAt
            }))
        }catch(err){
            console.log(err)
            throw new Error('Erro ao listar')
        }
    }

    async buscarAnimeId(id: string): Promise<Animes | null> {
        try{
            const buscar = await this.animeRepo.buscarPorId(id)
            if(!buscar.id) throw new Error('erro ao achar id do anime')
            return buscar
        }catch(err){
            console.log(err)
            throw new Error('Erro ao buscar anime')
        }
    }

    async deletarAnime(id: string, adminid: string): Promise<boolean | null> {
            try {
                const anime = await this.animeRepo.buscarPorId(id);
                if (!anime) throw new Error('Anime não encontrado');
                 
                if (anime.userId !== adminid) {
                // Opcional: verificar se o usuário é admin via UserRepository
                throw new Error('Você não tem permissão para deletar este anime');
                }

                await this.animeRepo.deletar(id);
                return true;
  } catch (err) {
    console.log(err);
    throw new Error('Erro ao deletar anime');
  }
}
    async atualizarAnime(id: string, adminId: string, data: Partial<Animes>): Promise<void> {
        try {
            const anime = await this.animeRepo.buscarPorId(id);
            if (!anime) throw new Error('Anime não encontrado');

            if (anime.userId !== adminId) {
                // Opcional: verificar se o usuário é admin via UserRepository
                throw new Error('Você não tem permissão para atualizar este anime');
            }

            // Merge existing anime data with the new partial data
            const updatedAnime = Animes.build({
                id: anime.id,
                title: data.title ?? anime.title,
                image: data.image ?? anime.image,
                description: data.description ?? anime.description,
                episodios: data.episodios ?? anime.episodios,
                dataCreateAt: anime.dataCreateAt,
                dataUpdateAt: new Date()
            });

            const atualizado = await this.animeRepo.atualizar(id, updatedAnime);
            
            
        } catch (err) {
            console.log(err);
            throw new Error('Erro ao atualizar anime');
        }
    }
}