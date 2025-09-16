"use client";

import { useState } from "react";
import { Morador } from "@/models/Morador";

// Mudança: o onSubmit não precisa de 'userId' nem 'status', só os campos do formulário
export default function FormAdd({
  onSubmit,
}: {
  onSubmit: (morador: Omit<Morador, "id" | "status">) => void;
}) {
  const [form, setForm] = useState<Omit<Morador, "id" | "status" | "userId">>({
    nome: "",
    email: "",
    telefone: "",
    bloco: "",
    apartamento: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form); // ❌ Não incluímos userId nem status aqui
    setForm({ nome: "", email: "", telefone: "", bloco: "", apartamento: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      <input
        name="apartamento"
        placeholder="Apartamento"
        value={form.apartamento}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Adicionar
      </button>
    </form>
  );
}
