/* "use client";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Payload from "./Payload";
import { useState } from "react";

export default function LayoutApp({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col bg-gray-50 dark:bg-gray-900">
      {/* Navbar *//* }
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar *//* }
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Conteúdo Principal *//* }
        <main className="flex-1 overflow-y-auto p-6">
          <Payload>{children}</Payload>
        </main>
      </div> */

      //{/* Footer */}
     /*  <Footer />
    </div>
  );
} */
"use client";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Payload from "./Payload";
import { useState } from "react";

type Role = "morador" | "sindico" | "admin";

export default function LayoutApp({
  children,
  role = "morador", // por padrão, morador
}: {
  children: React.ReactNode;
  role?: Role;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          role={role}
        />

        <main className="flex-1 overflow-y-auto p-6">
          <Payload>{children}</Payload>
        </main>
      </div>

      <Footer />
    </div>
  );
}
