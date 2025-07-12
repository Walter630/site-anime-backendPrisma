import { z } from "zod";

export const criarGenero = z.object({
    nome: z.string().min(1),
});

export const atualizarGenero = z.object({
    nome: z.string().min(1),
});

export const deletarGenero = z.object({
    id: z.string().min(1),
});