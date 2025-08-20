"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Condomínio Manager</h1>
      <div className="space-x-4">
        <Link href="/">Início</Link>
        <Link href="/login">Login</Link>
        <Link href="/cadastro">Cadastro</Link>
      </div>
    </nav>
  );
}
