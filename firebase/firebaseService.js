// firebase/firebaseService.js
import {
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "./firebase.config";

// CLIENTES
export async function getClientes() {
  const querySnapshot = await getDocs(collection(db, "usuarios"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function addOuAtualizaCliente(cliente) {
  const ref = doc(db, "usuarios", cliente.cpf);
  await setDoc(ref, {
    nome: cliente.nome,
    grupo: cliente.grupo,
    cidade: cliente.cidade,
    dataNascimento: cliente.dataNascimento,
    codigoUnico: cliente.codigoUnico,
    ativo: cliente.ativo,
    dataCadastro: cliente.dataCadastro,
    observacoes: cliente.observacoes || "",
  });
}

// PARCEIROS
export async function getParceiros() {
  const querySnapshot = await getDocs(collection(db, "parceiros"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function addOuAtualizaParceiro(parceiro) {
  const ref = doc(db, "parceiros", parceiro.cnpj);
  await setDoc(ref, {
    nomeFantasia: parceiro.nomeFantasia,
    cidade: parceiro.cidade,
    tipoDesconto: parceiro.tipoDesconto,
    contato: parceiro.contato,
    instagram: parceiro.instagram,
    email: parceiro.email,
    logoURL: parceiro.logoURL,
    ativo: parceiro.ativo,
    dataCadastro: parceiro.dataCadastro,
  });
}

// BENEFÍCIOS
export async function getBeneficios() {
  const querySnapshot = await getDocs(collection(db, "beneficios"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function addOuAtualizaBeneficio(beneficio) {
  const ref = doc(collection(db, "beneficios"));
  await setDoc(ref, {
    titulo: beneficio.titulo,
    descricao: beneficio.descricao,
    parceiroCNPJ: beneficio.parceiroCNPJ,
    dataInicio: beneficio.dataInicio,
    dataFim: beneficio.dataFim,
    ativo: beneficio.ativo,
    dataCadastro: beneficio.dataCadastro,
  });
}

// CONSULTAS (LOG)
export async function getConsultas() {
  const querySnapshot = await getDocs(collection(db, "consultas"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function registrarConsulta(log) {
  const ref = doc(collection(db, "consultas"));
  await setDoc(ref, {
    cpfConsultado: log.cpfConsultado,
    consultadoPor: log.consultadoPor,
    dataHora: log.dataHora,
    codigoUnicoERO: log.codigoUnicoERO,
    statusCliente: log.statusCliente,
    beneficiosVigentes: log.beneficiosVigentes || "",
  });
}
