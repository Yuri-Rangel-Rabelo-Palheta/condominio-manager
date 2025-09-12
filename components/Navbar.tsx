"use client";

import { Menu } from "lucide-react";

export default function Navbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <nav className="flex items-center justify-between bg-white px-4 py-3 shadow-md dark:bg-gray-800">
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={onToggleSidebar}
      >
        <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
      </button>
      <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Condomínio Manager</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600 dark:text-gray-300">Olá, Usuário</span>
        <img
          src="/avatar.png"
          alt="avatar"
          className="h-8 w-8 rounded-full border border-gray-300 dark:border-gray-600"
        />
      </div>
    </nav>
  );
}
