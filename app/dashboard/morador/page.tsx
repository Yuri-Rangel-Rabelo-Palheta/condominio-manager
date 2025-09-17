"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import LayoutApp from "@/components/LayoutApp";
export default function DashboardMorador() {

  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/login"); // redireciona se não estiver logado
        return;
      }

      try {
        // verifica se é síndico
        const sindicoRef = doc(db, "moradores", user.uid);
        const sindicoSnap = await getDoc(sindicoRef);

        if (sindicoSnap.exists()) {
          setRole("morador");
        } else {
          router.push("/login"); // redireciona se não for sindico
        }
      } catch (error) {
        console.error("Erro ao buscar role do usuário:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <p className="p-8 text-black">Carregando...</p>;
  }

  if (role !== "morador") {
    return <p className="p-8 text-red-600">Acesso negado.</p>;
  }

    return (
      <LayoutApp role={role}>
        <main className="min-h-screen bg-gray-500 p-8">
      <h1 className="text-3xl font-bold mb-4 text-black">Dashboard - Morador</h1>
      <p className="text-gray-600 mb-6">Bem-vindo ao seu painel do condomínio!</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-black">Boletos</h2>
          <p className="text-gray-500 mt-2">Veja e pague seus boletos do condomínio.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-black">Reservas</h2>
          <p className="text-gray-500 mt-2">Reserve áreas comuns como salão de festas.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-black">Avisos</h2>
          <p className="text-gray-500 mt-2">Confira avisos e comunicados do síndico.</p>
        </div>
      </div>
    </main>
      </LayoutApp>
    );

}