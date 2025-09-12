"use client";

import { useState } from "react";
import { Morador } from "@/models/Morador";
import { MoradorController } from "@/controllers/MoradorController";

export default function FormAdd() {
  const [formData, setFormData] = useState<Morador>({
    nome: "",
    email: "",
    telefone: "",
    bloco: "",
    apartamento: "",
    status: "ativo",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await MoradorController.add(formData);
      alert("Morador cadastrado com sucesso!");
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        bloco: "",
        apartamento: "",
        status: "ativo",
      });
    } catch (err) {
      console.error("Erro ao cadastrar morador:", err);
      alert("Erro ao cadastrar morador.");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Cadastro de Morador
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="nome"
          placeholder="Nome Completo"
          value={formData.nome}
          onChange={handleChange}
          required
          className="rounded-md border p-2 dark:bg-gray-700 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="rounded-md border p-2 dark:bg-gray-700 dark:text-white"
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
          className="rounded-md border p-2 dark:bg-gray-700 dark:text-white"
        />
        <div className="flex gap-2">
          <input
            type="text"
            name="bloco"
            placeholder="Bloco"
            value={formData.bloco}
            onChange={handleChange}
            required
            className="flex-1 rounded-md border p-2 dark:bg-gray-700 dark:text-white"
          />
          <input
            type="text"
            name="apartamento"
            placeholder="Apartamento"
            value={formData.apartamento}
            onChange={handleChange}
            required
            className="flex-1 rounded-md border p-2 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="rounded-md border p-2 dark:bg-gray-700 dark:text-white"
        >
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
