import User from "../domain/User";
import { UserRepository } from "../repository/UserRepository";
import bcrypt from "bcrypt";
import { createAcessToken, refreshToken } from "../utils/token/jwtToken";
import { LoginResult } from "../dto/LoginResultDTO";
const SOUNT_ROUNDS = 10
export class UsuarioServices {
    private usuarioRepo: UserRepository;
    constructor(usuarioRepo: UserRepository) {
        this.usuarioRepo = usuarioRepo;
    }

    async criarUsuario(usuario: User) {
        try{
            const novaSenha = await bcrypt.hash(usuario.password, SOUNT_ROUNDS);
            const usuarioComSenhaHash: User = {
                ...usuario,
                password: novaSenha,
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                createdAt: usuario.createdAt,
                updatedAt: usuario.updatedAt,
                // adicione outras propriedades obrigatórias do tipo User aqui, se houver
            } as User;
                        
            const usuarioCriado = await this.usuarioRepo.create(usuarioComSenhaHash);
            if (usuarioCriado && usuarioCriado.id === usuario.id){
                throw new Error('Usuario ja existe');
            }

            if(usuario.nome.trim().length >= 3) {
                throw new Error("Pode ser criado")
            }
            
            if (usuarioCriado) return usuarioCriado;
                return null;
            } catch (error) {
                console.error(error);
                throw new Error('Erro ao criar usuário');
        }
    }

    async login(email: string, password: string): Promise<LoginResult> {
        try{
            const usuario =  await this.usuarioRepo.buscarEmail(email)
            if (!usuario) {
                 throw new Error('erro ao buscar email')
            }

            const senhaCript = await bcrypt.compare(password, usuario.password)
            if(!senhaCript){
                throw new Error('Senha incorreta');
            }

            const gerarToken = createAcessToken({ id: usuario.id, email: usuario.email })
            const gerarRefreshToken = refreshToken({id: usuario.id, email: usuario.email})

            return {
                user: usuario,
                gerarToken,
                gerarRefreshToken
            };

                } catch (error) {
                    console.error(error);
                    throw new Error('Erro ao fazer login');
                }
    }

    async listar(): Promise<User[]> {
        try{
            const usuarios = await this.usuarioRepo.listar();
            
            return usuarios;
            } catch (error) {
                console.error(error);
                throw new Error('Erro ao listar usuários');
        }
    }

    async buscarUsuario(id: string): Promise<User | null>{
        try{
            return await this.usuarioRepo.buscarPorId(id)
        }catch(err){
            console.log(err)
            throw new Error('Erro ao buscar Usuario por id')
        }
    }

    async deletarUser(id: string): Promise<boolean> {
        try{
            const deletar = await this.usuarioRepo.deletar(id)
            if(!deletar) throw new Error('Nao deletado')
            return true    
        }catch(err){
            console.log(err)
            throw new Error('Erro ao deletar usuario')
        }
    }

    async atuaizarUser(id: string, user: User): Promise<void> {
        try{
            await this.usuarioRepo.atualizar(id, user)
            if(!user.ativado == true) {
                throw new Error('impossivel atualizar')
            }
        }catch(err){
            console.log(err)
            throw new Error('Erro ao atualizar usuario')
        }
    }
}