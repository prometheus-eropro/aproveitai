// pages/admin/parceiros.jsx
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function GerenciarParceiros() {
  const [parceiros, setParceiros] = useState([]);
  const [novoParceiro, setNovoParceiro] = useState({
    nome: '',
    cidade: '',
    desconto: '',
  });

  useEffect(() => {
    // Aqui você pode buscar do Firebase futuramente
    const dadosFake = [
      { nome: 'Farmácia Central', cidade: 'Guaçuí', desconto: '15%' },
      { nome: 'Supermercado Real', cidade: 'Guaçuí', desconto: '10%' },
    ];
    setParceiros(dadosFake);
  }, []);

  const adicionarParceiro = () => {
    setParceiros([...parceiros, novoParceiro]);
    setNovoParceiro({ nome: '', cidade: '', desconto: '' });
  };

  return (
    <main className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Gerenciar Parceiros</h1>

      <div className="space-y-2 bg-gray-100 p-4 rounded-xl">
        <h2 className="font-semibold">Adicionar Novo Parceiro</h2>
        <Input
          placeholder="Nome do Parceiro"
          value={novoParceiro.nome}
          onChange={(e) => setNovoParceiro({ ...novoParceiro, nome: e.target.value })}
        />
        <Input
          placeholder="Cidade"
          value={novoParceiro.cidade}
          onChange={(e) => setNovoParceiro({ ...novoParceiro, cidade: e.target.value })}
        />
        <Input
          placeholder="Desconto (ex: 15%)"
          value={novoParceiro.desconto}
          onChange={(e) => setNovoParceiro({ ...novoParceiro, desconto: e.target.value })}
        />
        <Button onClick={adicionarParceiro}>Salvar</Button>
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold">Lista de Parceiros</h2>
        {parceiros.map((p, i) => (
          <div key={i} className="p-3 rounded border flex justify-between items-center">
            <div>
              <p><strong>{p.nome}</strong> — {p.cidade}</p>
              <p>Desconto: {p.desconto}</p>
            </div>
            <div className="space-x-2">
              <Button variant="outline">Editar</Button>
              <Button variant="destructive">Excluir</Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
