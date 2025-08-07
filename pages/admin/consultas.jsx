// ✅ /pages/admin/consultas.jsx – visualização de logs de uso do sistema

import { useEffect, useState } from "react";
import { getConsultas } from "@/firebase/firebaseService";
import { Card, CardContent } from "@/components/ui/card";

export default function ConsultasPage() {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    buscarConsultas();
  }, []);

  const buscarConsultas = async () => {
    const lista = await getConsultas();
    setConsultas(lista);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Consultas Realizadas</h1>
        <div className="grid gap-4">
          {consultas.map((c, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <p><strong>CPF Consultado:</strong> {c.cpfConsultado}</p>
                <p><strong>Consultado por:</strong> {c.consultadoPor}</p>
                <p><strong>Status do Cliente:</strong> {c.statusCliente}</p>
                <p><strong>Data e Hora:</strong> {new Date(c.dataHora).toLocaleString()}</p>
                <p><strong>Código da Consulta:</strong> {c.codigoUnicoERO}</p>
                {c.beneficiosVigentes && (
                  <p><strong>Benefícios:</strong> {c.beneficiosVigentes}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
