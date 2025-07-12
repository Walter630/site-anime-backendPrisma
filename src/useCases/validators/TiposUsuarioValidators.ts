import { z } from "zod";

export const criarTipoUsuarioSchema = z.object({
    nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
    descricao: z.string().min(3, 'Descrição deve ter pelo menos 3 caracteres'),
});

export const seTornaAdminSchema = z.object({
    id: z.string().uuid('Id inválido'),
});
