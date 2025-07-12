// authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const TOKEN_SECRET = process.env.TOKEN_SECRET!;
if (!TOKEN_SECRET) throw new Error("Faltando TOKEN_SECRET no .env");

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; email?: string; role?: string };
    }
  }
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não informado" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const payload = jwt.verify(token, TOKEN_SECRET) as { id: string; email?: string; role?: string };
    // Coloca os dados do usuário na requisição
    req.user = {
      id: payload.id,
      email: payload.email,
      role: payload.role,
    };
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
}
