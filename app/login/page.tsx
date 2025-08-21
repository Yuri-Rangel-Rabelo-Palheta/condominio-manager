"use client";

import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Acessar o Sistema do Condomínio
        </h1>
        <AuthForm />
      </div>
    </main>
  );
}
