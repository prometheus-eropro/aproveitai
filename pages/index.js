// TODO: Estrutura base do site do Cartão AproveitAI - para ajustes locais
import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="p-4 space-y-8">
      {/* Cabeçalho com logos */}
      <div className="flex justify-between items-center">
        <Image src="/logo-empresa.png" alt="Logo Empresa" width={100} height={100} />
        <div className="text-center">
          <h1 className="text-3xl font-bold">Cartão AproveitAI</h1>
          <p className="text-lg">Com o Cartão AproveitAI você tem benefícios reais!</p>
        </div>
        <Image src="/logo-aproveitai.png" alt="Logo Cartão" width={100} height={100} />
      </div>

      {/* Benefícios e Promoções em banner */}
      <section className="bg-yellow-100 p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">🎁 Benefícios</h2>
        <ul className="list-disc list-inside">
          <li>Descontos reais: até 50% direto no caixa</li>
          <li>Cartão digital prático e seguro</li>
          <li>Rede de parceiros em expansão</li>
        </ul>
        <h3 className="text-lg mt-4">🔥 Promoções</h3>
        <p>15% de desconto em genéricos – Setembro 2025</p>
      </section>

      {/* Área de Consulta */}
      <Tabs defaultValue="parceiro" className="w-full">
        <TabsList className="flex justify-center gap-2">
          <TabsTrigger value="parceiro">Consulta do Parceiro</TabsTrigger>
          <TabsTrigger value="cliente">Acesso do Cliente</TabsTrigger>
        </TabsList>
        <TabsContent value="parceiro">
          <Card>
            <CardContent className="space-y-2">
              <h3 className="text-lg font-semibold">Consulta por CPF ou Código</h3>
              <Input placeholder="Digite o CPF ou escaneie o QR Code..." />
              <Button>Validar Desconto</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="cliente">
          <Card>
            <CardContent className="space-y-2">
              <h3 className="text-lg font-semibold">Verificar Situação do Cartão</h3>
              <Input placeholder="Digite seu CPF" />
              <Button>Consultar Benefícios</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Parceiros */}
      <section>
        <h2 className="text-xl font-semibold">🤝 Parceiros</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <Card>
            <CardContent>
              <h3 className="font-semibold">PROMETHEUS EROPRO</h3>
              <p>CNPJ: 58.584.332/0001-40</p>
              <p>Cidade: Guaçuí – ES</p>
              <p>Desconto: 20% em serviços digitais</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="font-semibold">Cartão AproveitAI</h3>
              <p>Instagram: @cartao.aproveitai</p>
              <p>Contato: 28 99969-2303</p>
              <p>Desconto: 10% em toda a rede</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-8 border-t pt-4">
        <p>© 2025 AproveitAI. Todos os direitos reservados.</p>
        <p>Empresa responsável: PROMETHEUS EROPRO SOLUÇÕES INTELIGENTES LTDA</p>
        <p>CNPJ: 58.584.332/0001-40 | Guaçuí–ES | cartao.aproveitai@gmail.com</p>
      </footer>
    </main>
  );
}
