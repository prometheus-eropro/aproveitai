// pages/admin/dashboard.jsx
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const router = useRouter();

  const handleNavegar = (rota) => {
    router.push(`/admin/${rota}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6">Painel do Administrador</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button onClick={() => handleNavegar("clientes")}>Gerenciar Clientes</Button>
          <Button onClick={() => handleNavegar("parceiros")}>Gerenciar Parceiros</Button>
          <Button onClick={() => handleNavegar("beneficios")}>Gerenciar Benefícios</Button>
          <Button onClick={() => handleNavegar("consultas")}>Ver Consultas</Button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Logado como admin • <span className="font-semibold">Cartão AproveitAI</span></p>
        </div>
      </div>
    </main>
  );
}
