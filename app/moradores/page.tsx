/* "use client";

import { useEffect, useState } from "react";
import LayoutApp from "@/components/LayoutApp";
import { MoradorController } from "@/controllers/MoradorController";
import { Morador } from "@/models/Morador";
import { useRouter } from "next/navigation";

// papel do usuário será obtido do Firebase
interface User {
  role: "admin" | "sindico" | "morador";
  email: string;
}

export default function MoradoresPage() {
  const [moradores, setMoradores] = useState<Morador[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  //const role = "admin" ;//"sindico"; 

  useEffect(() => {
    // ⚡ aqui você puxaria o usuário logado do Firebase Auth
    // estou mockando como síndico para exemplo:
    const currentUser: User = { role: "admin", email: "sindico@teste.com" };
    setUser(currentUser);

    const loadData = async () => {
      try {
        const result = await MoradorController.list({ user: currentUser });
        setMoradores(result);
      } catch (err: any) {
        setError(err.message);
      }
    };

    loadData();
  }, []);

  if (!user) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return (
      <LayoutApp role={user.role
        }>
        <main className="min-h-screen flex items-center justify-center">
          <p className="text-red-500 font-semibold">{error}</p>
        </main>
      </LayoutApp>
    );
  }

  return (
    <LayoutApp role={user.role}>
      <main className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6 text-black">Gerenciar Moradores</h1>

        <button
          onClick={async () => {
            try {
              const novoMorador: Morador = {
                nome: "Novo Morador",
                email: "novo@teste.com",
                telefone: "11999999999",
                bloco: "A",
                apartamento: "101",
                status: "ativo",
              };
              await MoradorController.add({ user }, novoMorador);
              const updated = await MoradorController.list({ user });
              setMoradores(updated);
            } catch (err: any) {
              setError(err.message);
            }
          }}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Adicionar Morador
        </button>

        <ul className="space-y-4">
          {moradores.map((morador) => (
            <li key={morador.id} className="p-4 bg-white rounded-lg shadow flex justify-between">
              <div>
                <p className="font-semibold text-black">{morador.nome}</p>
                <p className="text-gray-600">{morador.email}</p>
                <p className="text-gray-600">
                  {morador.bloco} - {morador.apartamento}
                </p>
                <p
                  className={`mt-1 text-sm ${
                    morador.status === "ativo" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {morador.status}
                </p>
              </div>
              <button
                onClick={async () => {
                  try {
                    await MoradorController.update(
                      { user },
                      morador.id!,
                      { status: "inativo" }
                    );
                    const updated = await MoradorController.list({ user });
                    setMoradores(updated);
                  } catch (err: any) {
                    setError(err.message);
                  }
                }}
                className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
              >
                Desativar
              </button>
            </li>
          ))}
        </ul>
      </main>
    </LayoutApp>
  );
}
 */


"use client";

import { useEffect, useState } from "react";
import LayoutApp from "@/components/LayoutApp";
import FormAdd from "@/components/FormAdd";
import { MoradorController } from "@/controllers/MoradorController";
import { Morador } from "@/models/Morador";
import { useRouter } from "next/navigation";

// papel do usuário será obtido do Firebase
interface User {
  role: "admin" | "sindico" | "morador";
  email: string;
}

export default function MoradoresPage() {
  const [moradores, setMoradores] = useState<Morador[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // ⚡ aqui você puxaria o usuário logado do Firebase Auth
    const currentUser: User = { role: "admin", email: "sindico@teste.com" };
    setUser(currentUser);

    const loadData = async () => {
      try {
        const result = await MoradorController.list({ user: currentUser });
        setMoradores(result);
      } catch (err: any) {
        setError(err.message);
      }
    };

    loadData();
  }, []);

  if (!user) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return (
      <LayoutApp role={user.role}>
        <main className="min-h-screen flex items-center justify-center">
          <p className="text-red-500 font-semibold">{error}</p>
        </main>
      </LayoutApp>
    );
  }

  const handleAddMorador = async (formData: Omit<Morador, "id" | "status" | "userId">) => {
    try {
      // aqui você chamaria a função de cadastro no Firebase Auth para criar o user
      // const cred = await createUserWithEmailAndPassword(auth, formData.email, senha);
      // Para teste, vamos gerar um UID fictício
      const fakeUid = "uid_" + new Date().getTime();

      const novoMorador: Morador = {
        ...formData,
        userId: fakeUid, // ✅ Define o UID do usuário
        status: "ativo", // ✅ Define o status
      };

      await MoradorController.add({ user }, novoMorador);
      const updated = await MoradorController.list({ user });
      setMoradores(updated);
      setShowForm(false);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <LayoutApp role={user.role}>
      <main className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6 text-black">Gerenciar Moradores</h1>

        {/* botão para mostrar/esconder o form */}
        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {showForm ? "Cancelar" : "Adicionar Morador"}
        </button>

        {/* FormAdd só aparece se showForm = true */}
        {showForm && <FormAdd onSubmit={handleAddMorador} />}

        <ul className="space-y-4 mt-6">
          {moradores.map((morador) => (
            <li key={morador.id} className="p-4 bg-white rounded-lg shadow flex justify-between">
              <div>
                <p className="font-semibold text-black">{morador.nome}</p>
                <p className="text-gray-600">{morador.email}</p>
                <p className="text-gray-600">
                  {morador.bloco} - {morador.apartamento}
                </p>
                <p
                  className={`mt-1 text-sm ${
                    morador.status === "ativo" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {morador.status}
                </p>
              </div>
              <button
                onClick={async () => {
                  try {
                    await MoradorController.update(
                      { user },
                      morador.id!,
                      { status: "inativo" }
                    );
                    const updated = await MoradorController.list({ user });
                    setMoradores(updated);
                  } catch (err: any) {
                    setError(err.message);
                  }
                }}
                className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
              >
                Desativar
              </button>
            </li>
          ))}
        </ul>
      </main>
    </LayoutApp>
  );
}
