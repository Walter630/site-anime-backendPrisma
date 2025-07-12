import TiposUsuarios from "../domain/TipoUsuario";
import { TiposUsuarioRepositorio } from "../repository/TipoUsuarioRepository";
import {
  CriarTipoUsuarioDTO,
  AtualizarTipoUsuarioDTO,
} from "../dto/TiposUserDto";

export class AdminServices {
  constructor(private readonly repo: TiposUsuarioRepositorio) {}

  async listarTipos(): Promise<TiposUsuarios[]> {
    return this.repo.findAll();
  }

  async criarTipoUsuario(dto: CriarTipoUsuarioDTO): Promise<TiposUsuarios> {
    // ↳ aqui você poderia validar permissões (JWT, roles...), se necessário
    const entity = TiposUsuarios.build({
        nome: dto.nome,
        descricao: dto.descricao || '',
        ativado: true,
        id: '',
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return this.repo.create(entity);
  }

  async atualizarTipoUsuario(
    dto: AtualizarTipoUsuarioDTO,
  ): Promise<TiposUsuarios | null> {
        const entity = TiposUsuarios.build({
            nome: dto.nome || '',
            descricao: dto.descricao || '',
            ativado: true,
            id: dto.id,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    return this.repo.update(entity);
  }
}
