import { PrismaClient } from "../generated/prisma";
import User from "../domain/User";
import TiposUsuario from '../domain/TipoUsuario';
import { randomUUID } from "crypto";

const prisma = new PrismaClient()
export class UserRepository {
    private prisma: PrismaClient;
    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async create(user: User): Promise<User> {
        // Create a new user in the database
        try{
            let tipoUsuarioId = user.tipo?.id;

            // Se não veio o id, tente buscar pelo nome do tipo
            if (!tipoUsuarioId && user.tipo?.nome) {
                const tipo = await this.prisma.tiposUsuario.findUnique({
                    where: { nome: user.tipo.nome }
                });
                if (!tipo) throw new Error("Tipo de usuário não encontrado");
                tipoUsuarioId = tipo.id;
            }

            if (!tipoUsuarioId) throw new Error("tipoUsuarioId é obrigatório e deve ser válido");

            const userCreate = await this.prisma.user.create({
                data: {
                    id: user.id || randomUUID().toString(),
                    nome: user.nome,
                    email: user.email || '',
                    password: user.password || '',
                    ativado: user.ativado ?? true,
                    tipoUsuarioId: tipoUsuarioId,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            });
            return User.build({
                ...userCreate,
                id: userCreate.id,
                tipo: user.tipo ? TiposUsuario.build(user.tipo) : undefined,
            })
        }catch(error){
            console.log(error)
            throw new Error( "Erro ao criar usuário: "+error)
        }
    }

    async listar(): Promise<User[]> {
        try {
            const listar = await this.prisma.user.findMany()
            
            return listar.map((linha) => User.build({
                id: linha.id,
                nome: linha.nome,
                email: linha.email,
                password: linha.password,
                ativado: linha.ativado,
            }))
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao listar usuários")
        }
    }

async buscarPorId(userId: string): Promise<User | null> {
    try {
        const encontrado = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: { tipoUsuario: true },
        });
        console.log(encontrado)
        const isAtivado = Boolean(encontrado?.ativado);
        if (!encontrado || !isAtivado || encontrado.deletedAt) return null;

        return User.build({
            id: encontrado.id,
            nome: encontrado.nome,
            email: encontrado.email,
            password: encontrado.password,
            ativado: encontrado.ativado,
            createdAt: encontrado.createdAt,
            updatedAt: encontrado.updatedAt,
            deletedAt: encontrado.deletedAt ?? null,
            tipo: encontrado.tipoUsuario
                ? TiposUsuario.build({
                    id: encontrado.tipoUsuario.id,
                    nome: encontrado.tipoUsuario.nome,
                    descricao: encontrado.tipoUsuario.descricao ?? '',
                    createdAt: encontrado.tipoUsuario.createdAt,
                    updatedAt: encontrado.tipoUsuario.updatedAt,
                    ativado: encontrado.tipoUsuario.ativado,
                })
                : undefined,
        });
    } catch (err) {
        console.error(err);
        throw new Error('Erro ao buscar usuário');
    }
}

    async deletar(userId: string):Promise<User> {
        try {
            const deletar = await this.prisma.user.update({
                where: {id: userId},
                data: {
                    ativado: false,
                    deletedAt: new Date()
                },
            })
            
            return User.build({
                ...deletar,
                updatedAt: deletar.updatedAt || new Date(),
                deletedAt: deletar.deletedAt || new Date()
            });
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao deletar usuário")
        }
    }

    async atualizar(userId: string, user: User): Promise<void> {
        try {
           await this.prisma.user.update({
                data: {
                  nome: user.nome,
                  email: user.email,
                  password: user.password  
                },
                where: {id: userId}
            })
            

        } catch (err) {
            console.log(err)
            throw new Error("Erro ao atualizar user")
        }
    }

    async buscarEmail(email: string): Promise<User> {
        try{
            const emailVeri = await prisma.user.findUnique({
                where: { email: "admin@email.com" },
                include: { tipoUsuario: true }, // nome correto da relação
              });
            if (!emailVeri)  throw new Error('email inexistete')
            return User.build({
                id: emailVeri.id,
                nome: emailVeri.nome,
                email: emailVeri.email,
                password: emailVeri.password
            })
        }catch(err){
            console.log(err)
            throw new Error('erro ao buscar email')
        }
    }
}

