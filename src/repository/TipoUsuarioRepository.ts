import TiposUsuarios from '../domain/TipoUsuario';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient()

export class TiposUsuarioRepositorio {

    async findAll(): Promise<TiposUsuarios[]> {
        try {
            const tipos = await prisma.tiposUsuario.findMany({
                where: {
                    ativado: true,
                    deletedAt: null,
                },
        })
        return tipos.map((tipoUsuario: any) => TiposUsuarios.build(tipoUsuario))
    }  catch (error) {
        throw new Error('Erro ao buscar tipos de usuário')
    }
}

    async findId(id: string): Promise<TiposUsuarios | null> {
        try {
            const tipo = await prisma.tiposUsuario.findUnique({
                where: {
                    id: id,
                    ativado: true,
                    deletedAt: null,
                }
            })
            if(!tipo){
                return null
            }
            return TiposUsuarios.build({
                id: tipo.id,
                nome: tipo.nome,
                ativado: tipo.ativado,
                descricao: tipo.descricao,
                createdAt: tipo.createdAt,
                updatedAt: tipo.updatedAt || undefined,
            })
    }catch(err){
        console.log(err)
        throw new Error('erro ao buscar tipo de usuário')
    }
}
    async create(tipo: TiposUsuarios): Promise<TiposUsuarios> {
        try {
        const tipoCreate = await prisma.tiposUsuario.create({
            data: {
                nome: tipo.nome,
                descricao: tipo.descricao
            },
        })
        return TiposUsuarios.build({
            id: tipoCreate.id,
            nome: tipoCreate.nome,
            descricao: tipoCreate.descricao,
            ativado: tipoCreate.ativado,
            createdAt: tipoCreate.createdAt,
            updatedAt: tipoCreate.updatedAt || undefined,
        })
    }catch(err){
        console.log(err)
        throw new Error('Erro ao criar Admin')
    }
    }

    async atualizarAdmin(tipo: TiposUsuarios): Promise<TiposUsuarios | null> {
        try{
            const tipoUpdate = await prisma.tiposUsuario.update({
                where: {id: tipo.id}, 
                data: {
                    nome: tipo.nome,
                    descricao: tipo.descricao
                },
        });
        if(!tipoUpdate){
            throw new Error('Erro ao atualizar Admin')
        }
        return TiposUsuarios.build({
            id: tipoUpdate.id,
            nome: tipoUpdate.nome,
            descricao: tipoUpdate.descricao,
            ativado: tipoUpdate.ativado,
            createdAt: tipoUpdate.createdAt,
            updatedAt: tipoUpdate.updatedAt || undefined
        });
        }catch(err){
            console.log(err)
            throw new Error('Erro ao atualizar admin')
        }
    }
}