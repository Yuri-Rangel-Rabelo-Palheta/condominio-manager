"use client";
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
}
