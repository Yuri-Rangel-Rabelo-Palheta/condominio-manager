"use client";

import Link from "next/link";
import { X } from "lucide-react";

const menus = [
  { name: "Moradores", href: "/moradores" },
  { name: "Finanças", href: "/financas" },
  { name: "Aluguel de espaço", href: "/aluguel" },
  { name: "Portaria", href: "/portaria" },
  { name: "Compras", href: "/compras" },
  { name: "Estoque", href: "/estoque" },
  { name: "Prestadores de Serviço", href: "/prestadores" },
  { name: "Relatórios", href: "/relatorios" },
];

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white p-4 shadow-lg transition-transform dark:bg-gray-800 md:static md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">Menu</h2>
        <button className="md:hidden" onClick={onClose}>
          <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
      <nav className="flex flex-col gap-2">
        {menus.map((menu, idx) => (
          <Link
            key={idx}
            href={menu.href}
            className="rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            {menu.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
