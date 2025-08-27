export default function DashboardSindico() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard - Síndico</h1>
      <p className="text-gray-600 mb-6">Gerencie o condomínio com facilidade.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold">Gestão Financeira</h2>
          <p className="text-gray-500 mt-2">Acompanhe boletos e pagamentos.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold">Comunicação</h2>
          <p className="text-gray-500 mt-2">Envie comunicados para os moradores.</p>
        </div>
      </div>
    </main>
  );
}
