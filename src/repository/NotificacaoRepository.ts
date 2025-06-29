import { PrismaClient } from "@prisma/client";
import { Notificacao } from "../domain/Notificacao";
import { User } from "../domain/User";

const prisma = new PrismaClient();

export class NotificacaoRepository {
  async create(notificacao: Notificacao) {
    try {
      const created = await prisma.notificacao.create({
        data: {
          id: notificacao.id,
          mensagem: notificacao.mensagem,
          userId: notificacao.user.id,
          lida: notificacao.lida,
          createdAt: notificacao.createdAt,
        },
      });
      return created;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao criar notificação.");
    }
  }

  async listarPorUsuario(userId: string): Promise<Notificacao[]> {
    try {
      const notificacoes = await prisma.notificacao.findMany({
        where: { userId },
        include: { user: true },
      });

      return notificacoes.map(n => Notificacao.create({
        id: n.id,
        mensagem: n.mensagem,
        lida: n.lida,
        createdAt: n.createdAt,
        user: new User({
          id: n.user.id,
          nome: n.user.nome,
          email: n.user.email,
          password: n.user.password,
          createdAt: n.user.createdAt,
          updatedAt: n.user.updatedAt,
        }),
      }));
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao listar notificações.");
    }
  }

  async marcarComoLida(id: string): Promise<void> {
    try {
      await prisma.notificacao.update({
        where: { id },
        data: { lida: true },
      });
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao marcar notificação como lida.");
    }
  }

  async deletar(id: string): Promise<void> {
    try {
      await prisma.notificacao.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao deletar notificação.");
    }
  }
}
