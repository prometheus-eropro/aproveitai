// ✅ /pages/admin/clientes.jsx – atualizado com os novos campos

import { useEffect, useState } from "react";
import {
  getClientes,
  addOuAtualizaCliente,
} from "@/firebase/firebaseService";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function gerarCodigoUnico() {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let resultado = "ERO";
  for (let i = 0; i < 5; i++) {
    resultado += letras.charAt(Math.floor(Math.random() * letras.length));
  }
  return resultado;
}

export default function ClientesPage() {
  const [clientes, setClientes] = useState([]);
  const [form, setForm] = useState({
    cpf: "",
    nome: "",
    grupo: "",
    cidade: "",
    dataNascimento: "",
    observacoes: "",
    ativo: true,
  });

  useEffect(() => {
    buscarClientes();
  }, []);

  const buscarClientes = async () => {
    const lista = await getClientes();
    setClientes(lista);
  };

  const handleSubmit = async () => {
    if (!form.cpf || !form.nome) return alert("Preencha CPF e nome.");
    const cliente = {
      ...form,
      dataCadastro: new Date().toISOString(),
      codigoUnico: gerarCodigoUnico(),
    };
    await addOuAtualizaCliente(cliente);
    setForm({
      cpf: "",
      nome: "",
      grupo: "",
      cidade: "",
      dataNascimento: "",
      observacoes: "",
      ativo: true,
    });
    buscarClientes();
  };

  return (
    <main className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Gerenciar Clientes</h1>

        <Card className="mb-6">
          <CardContent className="space-y-4 p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="CPF"
                value={form.cpf}
                onChange={(e) => setForm({ ...form, cpf: e.target.value })}
              />
              <Input
                placeholder="Nome completo"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
              />
              <Input
                placeholder="Grupo (Empresa/Sindicato/Particular)"
                value={form.grupo}
                onChange={(e) => setForm({ ...form, grupo: e.target.value })}
              />
              <Input
                placeholder="Cidade"
                value={form.cidade}
                onChange={(e) => setForm({ ...form, cidade: e.target.value })}
              />
              <Input
                type="date"
                placeholder="Data de nascimento"
                value={form.dataNascimento}
                onChange={(e) => setForm({ ...form, dataNascimento: e.target.value })}
              />
              <Input
                placeholder="Observações"
                value={form.observacoes}
                onChange={(e) => setForm({ ...form, observacoes: e.target.value })}
              />
            </div>
            <Button onClick={handleSubmit}>Salvar Cliente</Button>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {clientes.map((c) => (
            <Card key={c.cpf}>
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold">{c.nome}</p>
                  <p className="text-sm text-gray-500">CPF: {c.cpf}</p>
                  <p className="text-sm">Grupo: {c.grupo}</p>
                  <p className="text-sm">Cidade: {c.cidade}</p>
                  <p className="text-sm">Nascimento: {c.dataNascimento}</p>
                  <p className="text-sm">Código: {c.codigoUnico}</p>
                  <p className="text-sm">Status: {c.ativo ? "Ativo" : "Inativo"}</p>
                  {c.observacoes && (
                    <p className="text-xs text-gray-500">Obs: {c.observacoes}</p>
                  )}
                </div>
                <Button
                  variant="outline"
                  onClick={async () => {
                    await addOuAtualizaCliente({ ...c, ativo: !c.ativo });
                    buscarClientes();
                  }}
                >
                  {c.ativo ? "Desativar" : "Ativar"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}


// ✅ Em seguida, vou gerar a página de parceiros (/admin/parceiros.jsx) no próximo bloco.
