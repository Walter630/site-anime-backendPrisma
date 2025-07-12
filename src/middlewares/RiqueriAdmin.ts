// adminMiddleware.ts
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export async function requireAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: "Não autenticado" });

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { tipoUsuario: true },
    });

    if (!user || user.tipoUsuario?.nome !== "ADMIN") {
      return res.status(403).json({ error: "Apenas administradores" });
    }

    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Falha na verificação de admin" });
  }
}
