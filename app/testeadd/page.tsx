"use client";

import { useState } from "react";
import LayoutApp from "@/components/LayoutApp";
import FormAdd from "@/components/FormAdd";

export default function AddMoradorPage() {
  // papel do usuário logado (isso virá do Firebase Auth futuramente)
  const role = "admin"; 

  const [showForm, setShowForm] = useState(false);

  return (
    <LayoutApp role={role}>
      <div className="flex flex-col items-start gap-4">
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            ➕ Adicionar Morador
          </button>
        ) : (
          <FormAdd />
        )}
      </div>
    </LayoutApp>
  );
}
