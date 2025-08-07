import { useState } from "react";
import { useRouter } from "next/router";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export default function AdminLogin() {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (senha === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      router.push("/admin/parceiros"); // Redireciona para página de parceiros
    } else {
      setErro("Senha incorreta.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Login Admin</h1>
        <Input
          type="password"
          placeholder="Digite a senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {erro && <p className="text-red-500 mt-2">{erro}</p>}
        <Button onClick={handleLogin} className="w-full mt-4">
          Entrar
        </Button>
      </div>
    </div>
  );
}
