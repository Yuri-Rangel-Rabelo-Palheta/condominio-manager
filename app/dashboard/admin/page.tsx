export default function DashboardAdmin() {
  return (
    <main className="min-h-screen bg-gray-200 p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard - Administrador</h1>
      <p className="text-gray-600 mb-6">Controle total do sistema.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold">Usuários</h2>
          <p className="text-gray-500 mt-2">Gerencie moradores, síndicos e permissões.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold">Configurações</h2>
          <p className="text-gray-500 mt-2">Ajuste regras e parâmetros do sistema.</p>
        </div>
      </div>
    </main>
  );
}