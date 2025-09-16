// Sindico.ts
export interface Sindico {
  id?: string;            // ID gerado pelo Firebase, opcional
  userId: string;         // ID do usuário no Firebase Auth
  nome: string;
  email: string;
  telefone: string;
  bloco: string;
  condominio: string;     // Nome do condomínio que ele administra
  status: "ativo" | "inativo"; // Para controlar se está ativo ou não
}

