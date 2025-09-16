/* "use client";

import { useState } from "react";

export interface SindicoForm {
  condominio: string;
  nome: string;
  email: string;
  telefone: string;
  bloco: string;
}

interface FormAddSindProps {
  onSubmit: (sindico: SindicoForm) => void;
}

export default function FormAddSind({ onSubmit }: FormAddSindProps) {
  const [form, setForm] = useState<SindicoForm>({
    nome: "",
    email: "",
    telefone: "",
    bloco: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ nome: "", email: "", telefone: "", bloco: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow-md">
      <input
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="telefone"
        placeholder="Telefone"
        value={form.telefone}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="bloco"
        placeholder="Bloco"
        value={form.bloco}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Adicionar Síndico
      </button>
    </form>
  );
}
 */

"use client";

import { useState } from "react";
import { Sindico } from "@/models/Sindico";

interface FormAddSindProps {
  onSubmit: (sindico: Omit<Sindico, "id" | "userId" | "status">) => void;
}

export interface SindicoForm {
  condominio: string;
  nome: string;
  email: string;
  telefone: string;
  bloco: string;
}

export default function FormAddSind({ onSubmit }: FormAddSindProps) {
  const [form, setForm] = useState<Omit<Sindico, "id" | "userId" | "status">>({
    condominio: "",
    nome: "",
    email: "",
    telefone: "",
    bloco: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form); // status e userId serão adicionados no handleCadastroSindico
    setForm({ condominio: "", nome: "", email: "", telefone: "", bloco: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow-md">
      <input
        name="condominio"
        placeholder="Condomínio"
        value={form.condominio}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="telefone"
        placeholder="Telefone"
        value={form.telefone}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="bloco"
        placeholder="Bloco"
        value={form.bloco}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Adicionar Síndico
      </button>
    </form>
  );
}
