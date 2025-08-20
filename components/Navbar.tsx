"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <Link href="/" className="text-xl font-bold text-blue-600">
        Condominio Manager
      </Link>

      <div className="flex gap-4">
        <Link href="/login" className="text-gray-700 hover:text-blue-600">
          Login
        </Link>
        <Link
          href="/cadastro"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Cadastro
        </Link>
      </div>
    </nav>
  );
}
