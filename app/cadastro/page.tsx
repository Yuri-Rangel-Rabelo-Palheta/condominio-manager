/* "use client";
import { useState } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createUser } from "@/controllers/userController";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleCadastro() {
    const cred = await createUserWithEmailAndPassword(auth, email, senha);
    await createUser({
      id: cred.user.uid,
      nome: email.split("@")[0],
      email,
      role: "morador",
      createdAt: new Date(),
    });
  }

  return (
    <div className="p-6">
      <h1 className="text-xl">Cadastro</h1>
      <input
        type="email"
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2"
      />
      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
        className="border p-2"
      />
      <button onClick={handleCadastro} className="bg-blue-600 text-white p-2 rounded">
        Cadastrar
      </button>
    </div>
  );
} */

"use client";

import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import FormAdd from "@/components/FormAdd";
import FormAddSind, { SindicoForm } from "@/components/FormAddSind";
import { Morador } from "@/models/Morador";

type RoleType = "morador" | "sindico";

export default function Cadastro() {
  const [role, setRole] = useState<RoleType>("morador");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleCadastroMorador = async (moradorForm: Omit<Morador, "id" | "status" | "userId">) => {
    setError(null);
    try {
      // Cria usuário no Firebase Auth
      const cred = await createUserWithEmailAndPassword(auth, email, senha);

      const novoMorador: Morador = {
        userId: cred.user.uid, // ✅ UID definido aqui
        ...moradorForm,
        status: "ativo",
      };

      await setDoc(doc(db, "moradores", cred.user.uid), novoMorador);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleCadastroSindico = async (sindicoForm: SindicoForm & { condominio: string }) => {
    setError(null);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, senha);

      const sindicoData = {
        userId: cred.user.uid, // ✅ UID definido aqui
        ...sindicoForm,
      };

      await setDoc(doc(db, "sindicos", cred.user.uid), sindicoData);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto mt-10 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Cadastro</h1>

      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-500 mb-2">Cadastro realizado com sucesso!</p>}

      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            value="morador"
            checked={role === "morador"}
            onChange={() => setRole("morador")}
            className="mr-2"
          />
          Morador
        </label>
        <label>
          <input
            type="radio"
            value="sindico"
            checked={role === "sindico"}
            onChange={() => setRole("sindico")}
            className="mr-2"
          />
          Síndico
        </label>
      </div>

      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
        required
      />

      {role === "morador" ? (
        <FormAdd onSubmit={handleCadastroMorador} />
      ) : (
        <FormAddSind
          onSubmit={(formData) =>
            handleCadastroSindico({
              ...formData,
              condominio: formData.condominio || "Condomínio Teste", // opcional, se não preenchido
            })
          }
        />
      )}
    </div>
  );
}
