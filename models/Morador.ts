export interface Morador {
  id?: string;
  nome: string;
  email: string;
  telefone: string;
  bloco: string;
  apartamento: string;
  status: "ativo" | "inativo";
}
