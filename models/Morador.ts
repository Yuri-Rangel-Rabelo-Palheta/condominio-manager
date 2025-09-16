/* export interface Morador {
  id?: string;
  nome: string;
  email: string;
  telefone: string;
  bloco: string;
  apartamento: string;
  status: "ativo" | "inativo";
} */
// Morador.ts
export interface Morador {
  id?: string;
  userId?: string; // ✅ opcional
  nome: string;
  email: string;
  telefone: string;
  bloco: string;
  apartamento: string;
  condominio?: string; // se desejar vincular ao condominio
  status: "ativo" | "inativo";
}

