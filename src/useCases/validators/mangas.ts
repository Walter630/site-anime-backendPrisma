import { z } from "zod";

export const criarMangaSchema = z.object({
    title: z.string().min(3, 'Título deve ter pelo menos 3 caracteres'),
    description: z.string().min(3, 'Descrição deve ter pelo menos 3 caracteres'),
    image: z.string().min(3, 'Imagem deve ter pelo menos 3 caracteres'),
});

export const atualizarMangaSchema = z.object({
    id: z.string().uuid('Id inválido'),
    title: z.string().min(3, 'Título deve ter pelo menos 3 caracteres'),
    description: z.string().min(3, 'Descrição deve ter pelo menos 3 caracteres'),
    image: z.string().min(3, 'Imagem deve ter pelo menos 3 caracteres'),
});

export const deletarMangaSchema = z.object({
    id: z.string().uuid('Id inválido'),
});