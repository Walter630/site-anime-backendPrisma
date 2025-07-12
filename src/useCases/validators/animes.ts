import { z } from "zod";

export const criarAnimeSchema = z.object({
    title: z.string().min(3, 'Título deve ter pelo menos 3 caracteres'),
    description: z.string().min(3, 'Descrição deve ter pelo menos 3 caracteres'),
    image: z.string().min(3, 'Imagem deve ter pelo menos 3 caracteres'),
    episodios: z.number().min(1, 'Episódios deve ser maior que 0'),
});

export const atualizarAnimeSchema = z.object({
    id: z.string().uuid('Id inválido'),
    title: z.string().min(3, 'Título deve ter pelo menos 3 caracteres'),
    description: z.string().min(3, 'Descrição deve ter pelo menos 3 caracteres'),
    image: z.string().min(3, 'Imagem deve ter pelo menos 3 caracteres'),
    episodios: z.number().min(1, 'Episódios deve ser maior que 0'),
});

export const deletarAnimeSchema = z.object({
    id: z.string().uuid('Id inválido'),
});