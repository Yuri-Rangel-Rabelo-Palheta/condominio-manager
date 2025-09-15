import LayoutApp from "@/components/LayoutApp";

export default function DashboardSindico() {
  // papel do usuário logado (isso virá do Firebase Auth)
  const role = "sindico";

  return (
    <LayoutApp role={role}>
      <main className="min-h-screen bg-gray-500 p-8">
        <h1 className="text-3xl font-bold mb-4 text-black">Dashboard - Síndico</h1>
        <p className="text-gray-600 mb-6">
          Bem-vindo ao painel de gestão do condomínio!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-black">Avisos e Comunicados</h2>
            <p className="text-gray-500 mt-2">
              Envie comunicados para os moradores do condomínio.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-black">Financeiro</h2>
            <p className="text-gray-500 mt-2">
              Acompanhe pagamentos, inadimplências e despesas.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-black">Reservas</h2>
            <p className="text-gray-500 mt-2">
              Gerencie reservas das áreas comuns e aprove o uso.
            </p>
          </div>
        </div>
      </main>
    </LayoutApp>
  );
}
