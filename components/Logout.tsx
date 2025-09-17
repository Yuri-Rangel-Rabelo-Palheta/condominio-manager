"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login"); // redireciona para login após logout
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      title="Sair"
      className="flex items-center justify-center p-2 rounded hover:bg-red-100 transition"
    >
      <LogOut className="w-5 h-5 text-red-600" />
    </button>
  );
}
