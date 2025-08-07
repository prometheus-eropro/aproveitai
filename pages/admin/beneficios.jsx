// ✅ /pages/admin/beneficios.jsx – cadastro de promoções com vínculo ao parceiro

import { useEffect, useState } from "react";
import {
  getBeneficios,
  addOuAtualizaBeneficio,
  getParceiros,
} from "@/firebase/firebaseService";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BeneficiosPage() {
  const [beneficios, setBeneficios] = useState([]);
  const [parceiros, setParceiros] = useState([]);
  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    parceiroCNPJ: "",
    dataInicio: "",
    dataFim: "",
    ativo: true,
  });

  useEffect(() => {
    buscarBeneficios();
    buscarParceiros();
  }, []);

  const buscarBeneficios = async () => {
    const lista = await getBeneficios();
    setBeneficios(lista);
  };

  const buscarParceiros = async () => {
    const lista = await getParceiros();
    setParceiros(lista.filter(p => p.ativo));
  };

  const handleSubmit = async () => {
    if (!form.titulo || !form.parceiroCNPJ) return alert("Preencha título e parceiro.");
    const beneficio = {
      ...form,
      dataCadastro: new Date().toISOString(),
    };
    await addOuAtualizaBeneficio(beneficio);
    setForm({
      titulo: "",
      descricao: "",
      parceiroCNPJ: "",
      dataInicio: "",
      dataFim: "",
      ativo: true,
    });
    buscarBeneficios();
  };

  return (
    <main className="min-h-screen bg-yellow-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Gerenciar Benefícios</h1>

        <Card className="mb-6">
          <CardContent className="space-y-4 p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="Título do benefício"
                value={form.titulo}
                onChange={(e) => setForm({ ...form, titulo: e.target.value })}
              />
              <Input
                placeholder="Descrição"
                value={form.descricao}
                onChange={(e) => setForm({ ...form, descricao: e.target.value })}
              />
              <select
                value={form.parceiroCNPJ}
                onChange={(e) => setForm({ ...form, parceiroCNPJ: e.target.value })}
                className="border rounded px-3 py-2"
              >
                <option value="">Selecione o parceiro</option>
                {parceiros.map((p) => (
                  <option key={p.cnpj} value={p.cnpj}>
                    {p.nomeFantasia} ({p.cidade})
                  </option>
                ))}
              </select>
              <Input
                type="date"
                placeholder="Início"
                value={form.dataInicio}
                onChange={(e) => setForm({ ...form, dataInicio: e.target.value })}
              />
              <Input
                type="date"
                placeholder="Fim"
                value={form.dataFim}
                onChange={(e) => setForm({ ...form, dataFim: e.target.value })}
              />
            </div>
            <Button onClick={handleSubmit}>Salvar Benefício</Button>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {beneficios.map((b, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <p className="font-semibold">{b.titulo}</p>
                <p className="text-sm">Descrição: {b.descricao}</p>
                <p className="text-sm">Parceiro CNPJ: {b.parceiroCNPJ}</p>
                <p className="text-sm">De: {b.dataInicio} até {b.dataFim}</p>
                <p className="text-sm">Status: {b.ativo ? "Ativo" : "Inativo"}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
