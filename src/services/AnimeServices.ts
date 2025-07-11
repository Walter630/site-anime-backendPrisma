import { AnimesRepository } from './../repository/AnimesRepository';
import { Animes } from "../domain/Animes";
import { getIO } from '../utils/sockets/sokec';
import { Generos } from '../domain/Generos';

export class AnimesServices {
    private animeRepo: AnimesRepository;
    constructor(private readonly animeR: AnimesRepository){
        this.animeRepo = animeR;
    }
    async createAnime(anime: Animes): Promise<Animes> {
        try{
            const criar = await this.animeRepo.create(anime);
            if(!criar.userId) throw new Error('userId e adminId são obrigatórios');
            if (typeof anime.episodios !== 'number') {
                throw new Error('Número de episódios é obrigatório e deve ser inteiro');
            }
            
            getIO().emit('notification', {
                type: 'anime_created',
                message: 'Um novo anime foi criado',
                data: {
                    id: criar.id,
                    title: criar.title,
                    image: criar.image,
                    description: criar.description,
                    generos: [] as Generos[]
                }
            });
            return Animes.build({
               id: criar.id,
               title: criar.title,
               image: criar.image,
               description: criar.description,
               episodios: criar.episodios,
               dataCreateAt: criar.createdAt,
               dataUpdateAt: criar.updatedAt,
               userId: criar.userId,
               generos: [] as Generos[]
            } as Animes);
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
                dataUpdateAt: linha.dataUpdateAt,
                generos: linha.generos as Generos[],
                userId: linha.userId
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
                dataUpdateAt: new Date(),
                generos: anime.generos as Generos[] || []
            });

            const atualizado = await this.animeRepo.atualizar(id, updatedAnime);
            
            
        } catch (err) {
            console.log(err);
            throw new Error('Erro ao atualizar anime');
        }
    }
}