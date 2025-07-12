import {z} from 'zod'

export const criarUsuario = z.object({
    nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
    email: z.string().email('Email inválido'),
    password: z.string().min(8, 'Senha deve ter pelo menos 8 caracteres'),
    
})

export const atualizarUsuarioSchema = z.object({
    nome:     z.string().min(3).optional(),
    email:    z.string().email().optional(),
    password: z.string().min(6).optional(),
  });
  
export const idParamSchema = z.object({
    id: z.string().uuid("Id inválido"),
  });

export const loginSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(8, 'Senha deve ter pelo menos 8 caracteres'),
  });