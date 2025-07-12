import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const TOKEN_SECRET = process.env.TOKEN_SECRET || "super‑segredo";
if (!TOKEN_SECRET) {
  throw new Error("Faltando TOKEN_SECRET no .env");
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Token não informado" });
  }

  const [, token] = authHeader.split(" ");
  jwt.verify(token, TOKEN_SECRET, (err: any, payload: any) => {
    if (err || !payload?.id) {
      return res.status(401).json({ error: "Token inválido" });
    }
    req.body.userId = payload.id;  // adiciona o id na requisição
    next();
  });
}
