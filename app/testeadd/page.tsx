"use client";

import { useState, useEffect } from "react";
import LayoutApp from "@/components/LayoutApp";
import FormAdd from "@/components/FormAdd";
import { Morador } from "@/models/Morador";
import { MoradorController } from "@/controllers/MoradorController";

export default function TesteAddPage() {
  const role = "admin"; // pegar do Firebase Auth em produção
  const [moradores, setMoradores] = useState<Morador[]>([]);
  const [error, setError] = useState<string | null>(null);

  // carrega moradores existentes
  useEffect(() => {
    const loadData = async () => {
      try {
        const list = await MoradorController.list({ user: { role } });
        setMoradores(list);
      } catch (err: any) {
        setError(err.message);
      }
    };
    loadData();
  }, [role]);

  const handleAdd = async (morador: Morador) => {
    try {
      await MoradorController.add({ user: { role } }, morador);
      const updated = await MoradorController.list({ user: { role } });
      setMoradores(updated);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <LayoutApp role={role}>
      <main className="min-h-screen p-8 bg-gray-500">
        <h1 className="text-3xl font-bold mb-6">Adicionar Morador</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <FormAdd onSubmit={handleAdd} />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Lista de Moradores</h2>
        <ul className="space-y-4">
          {moradores.map((m) => (
            <li key={m.id} className="p-4 bg-gray-400 rounded shadow">
              {m.nome} - {m.bloco}-{m.apartamento} ({m.status})
            </li>
          ))}
        </ul>
      </main>
    </LayoutApp>
  );
}
