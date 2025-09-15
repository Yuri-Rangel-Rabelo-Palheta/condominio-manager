import LayoutApp from "@/components/LayoutApp";

export default function DashboardMorador() {

   // papel do usuário logado (isso virá do Firebase Auth)
    const role = "morador"; 
  
    return (
      <LayoutApp role={role}>
        <main className="min-h-screen bg-gray-500 p-8">
      <h1 className="text-3xl font-bold mb-4 text-black">Dashboard - Morador</h1>
      <p className="text-gray-600 mb-6">Bem-vindo ao seu painel do condomínio!</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-black">Boletos</h2>
          <p className="text-gray-500 mt-2">Veja e pague seus boletos do condomínio.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-black">Reservas</h2>
          <p className="text-gray-500 mt-2">Reserve áreas comuns como salão de festas.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-black">Avisos</h2>
          <p className="text-gray-500 mt-2">Confira avisos e comunicados do síndico.</p>
        </div>
      </div>
    </main>
      </LayoutApp>
    );

}