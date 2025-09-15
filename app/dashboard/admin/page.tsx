import LayoutApp from "@/components/LayoutApp";

export default function DashboardAdmin() {
  // papel do usuário logado (isso virá do Firebase Auth)
  const role = "admin";

  return (
    <LayoutApp role={role}>
      <main className="min-h-screen bg-gray-500 p-8">
        <h1 className="text-3xl font-bold mb-4 text-black">Dashboard - Administrador</h1>
        <p className="text-gray-600 mb-6">
          Bem-vindo ao painel administrativo do condomínio!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-black">Gestão de Usuários</h2>
            <p className="text-gray-500 mt-2">
              Adicione, edite e remova moradores e síndicos.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-black">Configurações do Sistema</h2>
            <p className="text-gray-500 mt-2">
              Configure permissões, segurança e relatórios.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-black">Relatórios</h2>
            <p className="text-gray-500 mt-2">
              Acesse relatórios completos de finanças e atividades.
            </p>
          </div>
        </div>
      </main>
    </LayoutApp>
  );
}
