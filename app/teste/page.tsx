"use client";

import LayoutApp from "@/components/LayoutApp";
import FormAddSind, { SindicoForm } from "@/components/FormAddSind";
import { useState } from "react";

export default function AddSindicoPage() {
  const role = "admin"; // pegar do Firebase Auth
  const [sindicos, setSindicos] = useState<SindicoForm[]>([]);

  const handleAdd = (sindico: SindicoForm) => {
    // Aqui você chamaria o controller de síndicos
    // Exemplo:
    // await SindicoController.add({ user: { role } }, sindico);

    // Por enquanto, só adiciona localmente
    setSindicos((prev) => [...prev, sindico]);
  };

  return (
    <LayoutApp role={role}>
      <main className="min-h-screen p-8 bg-gray-500">
        <h1 className="text-3xl font-bold mb-6">Adicionar Síndico</h1>
        <FormAddSind onSubmit={handleAdd} />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Lista de Síndicos</h2>
        <ul className="space-y-4">
          {sindicos.map((s, idx) => (
            <li key={idx} className="p-4 bg-gray-400 rounded shadow">
              {s.nome} - {s.email} - {s.bloco}
            </li>
          ))}
        </ul>
      </main>
    </LayoutApp>
  );
}
