"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Loader2 } from "lucide-react";

export default function AuthForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      router.push("/dashboard/sindico");
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        setErro("Usuário não encontrado.");
      } else if (error.code === "auth/wrong-password") {
        setErro("Senha incorreta.");
      } else {
        setErro("Erro ao acessar. Verifique os dados e tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-5">
      {/* Campo Email */}
      <div>
        <label className="block text-gray-700 text-sm font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          aria-label="Digite seu email"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
          placeholder="exemplo@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Campo Senha */}
      <div>
        <label className="block text-gray-700 text-sm font-semibold mb-1">
          Senha
        </label>
        <input
          type="password"
          aria-label="Digite sua senha"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
          placeholder="********"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </div>

      {/* Erros */}
      {erro && (
        <p className="text-red-500 text-sm font-medium bg-red-50 border border-red-200 px-3 py-2 rounded-md">
          {erro}
        </p>
      )}

      {/* Botão */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center bg-indigo-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? <Loader2 className="animate-spin h-5 w-5" /> : "Entrar"}
      </button>

      {/* Links auxiliares */}
      <div className="text-sm text-center text-gray-500 mt-3 space-x-4">
        <a href="/recuperar-senha" className="hover:text-indigo-600 transition">
          Esqueceu a senha?
        </a>
        <a href="/registrar" className="hover:text-indigo-600 transition">
          Criar conta
        </a>
      </div>
    </form>
  );
}

