import { Mangas } from '../domain/Mangas';
import { MangasRepository } from '../repository/MangasRepository';
import { getIO } from '../utils/sockets/sokec';

export class MangasServices {
    private mangaRepo: MangasRepository;
    constructor(private readonly mangaR: MangasRepository) {
        this.mangaRepo = mangaR;
    }
    async createManga(manga: Mangas): Promise<Mangas> {
        try {
            const criar = await this.mangaRepo.create(manga);
            if (!criar.adminId) {
                throw new Error('Admin ID is required');
            }
            getIO().emit('notification', {
                type: 'manga_created',
                message: 'Um novo manga foi criado',
                data: {
                    id: criar.id,
                    title: criar.title,
                    image: criar.image,
                    description: criar.description,
                }
            });
            
            return Mangas.build({
                id: criar.id,
                title: criar.title,
                image: criar.image,
                description: criar.description,
                createdAt: criar.createdAt,
                updatedAt: criar.updatedAt,
                adminId: criar.adminId,
                generos: criar.generos,
                favoritos: criar.favoritos,
            });
        } catch (err) {
            console.log(err);
            throw new Error('Error creating manga');
        }
    }
    async listarMangas(): Promise<Mangas[]> {
        try {
            const mangas = await this.mangaRepo.listarMangas();
            if(!mangas || mangas.length === 0) {
                throw new Error('No mangas found');
            }
            return mangas.map(manga => Mangas.build({
                id: manga.id,
                title: manga.title,
                image: manga.image,
                description: manga.description,
                createdAt: manga.createdAt,
                updatedAt: manga.updatedAt,
                adminId: manga.adminId,
                generos: manga.generos,
                favoritos: manga.favoritos,
            }));
        } catch (err) {
            console.log(err);
            throw new Error('Error listing mangas');
        }
    }

    async bucsarMangaPorId(id: string): Promise<Mangas | null> {
        try {
            const manga = await this.mangaRepo.buscarMangaId(id);
            if (!manga) {
                return null;
            }
            return Mangas.build({
                id: manga.id,
                title: manga.title,
                image: manga.image,
                description: manga.description,
                createdAt: manga.createdAt,
                updatedAt: manga.updatedAt,
                adminId: manga.adminId,
                generos: manga.generos,
                favoritos: manga.favoritos,
            });
        } catch (err) {
            console.log(err);
            throw new Error('Error fetching manga by ID');
        }
    }

    async atualizarManga(id: string, manga: Mangas): Promise<Mangas> {
        try {
            const atualizar = await this.mangaRepo.atualizarManga(id, manga);
            if (!atualizar) {
                throw new Error('Manga not found');
            }
            return Mangas.build({
                id: atualizar.id,
                title: atualizar.title,
                image: atualizar.image,
                description: atualizar.description,
                createdAt: atualizar.createdAt,
                updatedAt: atualizar.updatedAt,
                adminId: atualizar.adminId,
                generos: atualizar.generos,
                favoritos: atualizar.favoritos,
            });
        } catch (err) {
            console.log(err);
            throw new Error('Error updating manga');
        }
    }

    async deletarManga(id: string, adminId: string): Promise<void> {
        try {
            const manga = await this.mangaRepo.buscarMangaId(id);
            if (!manga) {
                throw new Error('Manga not found');
            }
            if (!manga.adminId ) {
                throw new Error('Unauthorized to delete this manga');
            }
            await this.mangaRepo.deletarManga(id);
            getIO().emit('notification', {
                type: 'manga_deleted',
                message: 'Um manga foi deletado',
                data: { id }
            });
        } catch (err) {
            console.log(err);
            throw new Error('Error deleting manga');
        }
    }
}