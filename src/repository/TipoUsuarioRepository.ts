import { PrismaClient } from "../generated/prisma"; // ajuste se usar @prisma/client
import TiposUsuarios from "../domain/TipoUsuario";

const prisma = new PrismaClient();

export class TiposUsuarioRepositorio {
  async findAll(): Promise<TiposUsuarios[]> {
    const tipos = await prisma.tiposUsuario.findMany({
      where: { ativado: true },
    });
    return tipos.map((linha) => TiposUsuarios.build({
      id: linha.id,
      nome: linha.nome,
      descricao: linha.descricao ?? '',
      createdAt: linha.createdAt,
      updatedAt: linha.updatedAt,
      ativado: linha.ativado,
    }));
  }

  async findById(id: string): Promise<TiposUsuarios | null> {
    const tipo = await prisma.tiposUsuario.findUnique({ where: { id } });
    return tipo && tipo.ativado && !tipo.deletedAt ? TiposUsuarios.build({
      id: tipo.id,
      nome: tipo.nome,
      descricao: tipo.descricao ?? '',
      createdAt: tipo.createdAt,
      updatedAt: tipo.updatedAt,
      ativado: tipo.ativado,
    }) : null;
  }

  async create(tipo: TiposUsuarios): Promise<TiposUsuarios> {
    const created = await prisma.tiposUsuario.create({
      data: {
        nome: tipo.nome,
        descricao: tipo.descricao,
        ativado: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
      return TiposUsuarios.build({
        id: created.id,
        nome: created.nome,
        descricao: created.descricao ?? '',
        createdAt: created.createdAt,
        updatedAt: created.updatedAt,
        ativado: created.ativado,
      });
  }

  async update(tipo: TiposUsuarios): Promise<TiposUsuarios> {
    const updated = await prisma.tiposUsuario.update({
      where: { id: tipo.id },
      data: {
        nome: tipo.nome,
        descricao: tipo.descricao,
      },
    });
    return TiposUsuarios.build({
      id: updated.id,
      nome: updated.nome,
      descricao: updated.descricao ?? '',
      createdAt: updated.createdAt,
      updatedAt: updated.updatedAt,
      ativado: updated.ativado,
    });
  }
}
