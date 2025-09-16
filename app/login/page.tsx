"use client";

import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-50 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h1 className="text-3xl font-extrabold text-center text-indigo-600 mb-2">
          Bem-vindo 👋
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Acesse o sistema do condomínio
        </p>
        <AuthForm />
      </div>
    </main>
  );
}
