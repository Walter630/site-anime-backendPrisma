// src/middlewares/validar.ts
import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

type Fonte = "body" | "params" | "query";

/** Retorna um middleware que valida body, params ou query */
export function validar(schema: ZodSchema<any>, fonte: Fonte = "body") {
  return (req: Request, res: Response, next: NextFunction) => {
    const dados = req[fonte];

    const resultado = schema.safeParse(dados);
    if (!resultado.success) {
      return res.status(400).json({
        mensagem: "Dados invalidos",
        erros: resultado.error.flatten().fieldErrors,
      });
    }

    // Se quiser, sobrescreva os dados já normalizados:
    req[fonte] = resultado.data as any;
    next();
  };
}
