import { PrismaClient } from "@prisma/client";
import { Generos } from "../domain/Generos";

const prisma = new PrismaClient()
export class GenerosRepository {
    async criarGenero(genero: Generos) {
        try{
            const criarGenero = await prisma.genero.create({
                data: {
                    nome: genero.nome,
                }
            })
            return criarGenero
        }catch(err){
            console.log(err)
            throw new Error("Erro ao criar genero")
        }
    }

    async listarGenero(): Promise<Generos[]> {
        try{
            const listarGenero = await prisma.genero.findMany()
            return listarGenero.map((row) => Generos.build({
                id: row.id,
                nome: row.nome
            }));
        }catch(err){
            console.log(err)
            throw new Error("Erro ao listar genero")
        }
    }

    async buscarGeneroPorId(id: string): Promise<Generos> {
        try{
            const buscarGeneroPorId = await prisma.genero.findUnique({
                where: {
                    id: id
                }
            })
            if(!buscarGeneroPorId) throw new Error("Genero não encontrado")
            return Generos.build({
                id: buscarGeneroPorId.id,
                nome: buscarGeneroPorId.nome
            })
    }catch(err){
        console.log(err)
        throw new Error("Erro ao buscar genero")
    }
}

    async atualizarGenero(id: string, genero: Generos): Promise<Generos | null> {
        try{
           const atualizarGenero = await prisma.genero.update({
                where: {
                    id: id
                },
                data: {
                    nome: genero.nome
                }
            });
            if(!atualizarGenero) throw new Error("Genero não encontrado")
            return Generos.build({
                id: atualizarGenero.id,
                nome: atualizarGenero.nome
            })
    }catch(err){
        console.log(err)
        throw new Error("Erro ao atualizar genero")
    }
}

 async deletarGenero(id: string): Promise<boolean> {
    try{
         const deletarGenero = await prisma.genero.delete({
            where: {
                id: id
            }
        })
        if(!deletarGenero) throw new Error("Genero não encontrado")
        return true
    }catch(err) {
        console.log(err)
        throw new Error("Erro ao deletar genero")
    }
 }
}