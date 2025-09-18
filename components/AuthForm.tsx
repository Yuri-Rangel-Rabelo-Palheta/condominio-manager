"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
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
      const cred = await signInWithEmailAndPassword(auth, email, senha);
      const uid = cred.user.uid;
      const token = await cred.user.getIdToken();

      document.cookie = `token=${token}; path=/; Secure; SameSite=Strict; HttpOnly`;

      // Primeiro, verifica se é síndico
      const sindicoRef = doc(db, "sindicos", uid);
      const sindicoSnap = await getDoc(sindicoRef);

      if (sindicoSnap.exists()) {
        router.push("/dashboard/sindico");
        return;
      }

      // Se não for síndico, verifica se é morador
      const moradorRef = doc(db, "moradores", uid);
      const moradorSnap = await getDoc(moradorRef);

      if (moradorSnap.exists()) {
        router.push("/dashboard/morador");
        return;
      }

      // Se não achar em nenhuma coleção
      setErro("Usuário não encontrado em moradores ou síndicos.");
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
