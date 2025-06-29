import { PrismaClient } from "../generated/prisma";
import User from "../domain/User";
import TiposUsuario from '../domain/TipoUsuario';

export class UserRepository {
    private constructor(private readonly prisma: PrismaClient) {}
     public static create(prisma: PrismaClient): UserRepository {
        return new UserRepository(prisma);
    }
    async create(user: User): Promise<User> {
        // Create a new user in the database
        try{
            const userCreate = await this.prisma.user.create({
                data: {
                    id: user.id,
                    nome: user.nome,
                    email: user.email,
                    password: user.password,
                    deletedAt: new Date() || null, // or new Date() if you want to set a date
                },
            });
            return User.build({
                ...userCreate,
                tipo: user.tipo ? TiposUsuario.build(user.tipo) : undefined,
                updatedAt: userCreate.updatedAt || new Date(),
            })
        }catch(error){
            console.log(error)
            throw new Error( "Erro ao criar usuário"+error)
        }
    }

    async listar(): Promise<User[]> {
        try {
            const listar = await this.prisma.user.findMany()
            
            return listar.map((linha) => User.build({
                id: linha.id,
                nome: linha.nome,
                email: linha.email,
                password: linha.password
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

        if (!encontrado || !encontrado.ativado || encontrado.deletedAt) return null;

        return User.build({
            id: encontrado.id,
            nome: encontrado.nome,
            email: encontrado.email,
            password: encontrado.password,
            tipo: encontrado.tipoUsuario
                ? TiposUsuario.build({
                    id: encontrado.tipoUsuario.id,
                    nome: encontrado.tipoUsuario.nome,
                    descricao: encontrado.tipoUsuario.descricao
                })
                : undefined,
            updatedAt: encontrado.updatedAt || new Date(),
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
            const emailVeri = await this.prisma.user.findUnique({where: {email: email}})
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

