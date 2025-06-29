import { PrismaClient } from "@prisma/client";
import { Mangas } from "../domain/Mangas";

const prisma = new PrismaClient()
export class MangasRepository {
    async create(mangas: Mangas): Promise<Mangas> {
        try{
            const criarManga = await prisma.mangas.create({
                data: {
                    title: mangas.title,
                    image: mangas.image,
                    description: mangas.description
                }
            })
            return Mangas.build({
                id: criarManga.id,
                title: criarManga.title,
                description: criarManga.description,
                image: criarManga.image,
            })
        }catch(err){
            console.log(err)
            throw new Error('Erro ao criar mangas')
        }
    }
    async listarMangas(): Promise<Mangas[] | null> {
        try{
            const list = await prisma.mangas.findMany()
            return list.map((row) => Mangas.build({
                id: row.id,
                title: row.title,
                description: row.description,
                image: row.image
            }))
        }catch(err){
            console.log(err)
            throw new Error('Nao possui mangas')
        }
    }

    async buscarMangaId(mangaId: string): Promise<Mangas | null> {
        try{
            const buscar = await prisma.mangas.findUnique({where: {id: mangaId}})
            if(!buscar) return null
            return Mangas.build({
                id: buscar.id,
                title: buscar.title,
                description: buscar.description,
                image: buscar.image
            })
        }catch(err){
            console.log(err)
            throw new Error('Erro ao buscar mangas')
        }
    }

    async deletarManga(id: string): Promise<boolean> {
        try{
            const deletar = await prisma.mangas.delete({where: {id: id}})
            if (!deletar.id) return false
            return true
        }catch(err){
            console.log(err)
            throw new Error('Erro ao deletar manga')
        }
    }

    async atualizarManga(mangaId: string, manga: Mangas): Promise<Mangas | null> {
        try{
            const atualizar = await prisma.mangas.update({
                where: {id: mangaId},
                data: {
                    title: manga.title,
                    description: manga.description,
                    image: manga.image
                },
        });
        return Mangas.build({
            id: atualizar.id,
            title: atualizar.title,
            description: atualizar.description,
            image: atualizar.image
        });
    }catch(err){
        console.log(err)
        throw new Error('Erro ao atualizar manga')
    }
}
}