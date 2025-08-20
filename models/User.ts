export interface User {
  id: string;
  nome: string;
  email: string;
  role: "morador" | "sindico" | "admin";
  createdAt: Date;
}
