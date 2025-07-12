// src/dto/TiposUsuarioDTO.ts
export interface CriarTipoUsuarioDTO {
    nome: string;
    descricao?: string;
  }
  
  export interface AtualizarTipoUsuarioDTO {
    id: string;
    nome?: string;
    descricao?: string;
  }
  