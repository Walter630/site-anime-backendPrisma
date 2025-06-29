import TiposUsuarios from "../domain/TipoUsuario";
import { TiposUsuarioRepositorio} from "../repository/TipoUsuarioRepository";
import { createAcessToken } from "../utils/token/jwtToken";

export class AdminServices {
    constructor(private tipoUsua: TiposUsuarioRepositorio){}
    

    async seTornaAdmin(tipoUser: TiposUsuarios) {
        try{
            const admin = TiposUsuarios.build({
                id: tipoUser.id,
                nome: tipoUser.nome,
                descricao: tipoUser.descricao,
            });
            
            return await this.tipoUsua.create(admin);
        }catch(er){
            console.log(er)
            throw new Error('Erro Ao se torna admin')
        }
    }

    async criarTipoUsuario(tipos: TiposUsuarios) {
        try{
            const criar = await this.tipoUsua.create(tipos)
            if(tipos.nome !== 'ADMIN') {
                throw new Error('Somente administradores podem criar tipos de usuário');
            }
            return criar
        }catch(err){
            console.log(err)
            throw new Error('Erro ao criar tipo usuario')
        }
    }

    async findAll(): Promise<TiposUsuarios[]> {
        try{
            const listar = await this.tipoUsua.findAll()
            return listar.map((linha) => TiposUsuarios.build({
                id: linha.id,
                nome: linha.nome,
                descricao: linha.descricao
            }))
        } catch(err){
            console.log(err)
            throw new Error('erro ao buscar')
        }
    } 
}