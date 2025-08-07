// pages/api/verificar.js

import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AlzaSyDnegX0BvQbHlYeB3r0L_2DemiEkRXZnOo',
  authDomain: 'aproveitai.firebaseapp.com',
  projectId: 'aproveitai',
  storageBucket: 'aproveitai.appspot.com',
  messagingSenderId: '536504520983',
  appId: '1:536504520983:web:someAppIdHere'
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const db = getFirestore();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { codigo } = req.body;

  if (!codigo) {
    return res.status(400).json({ valido: false, message: 'Código ausente' });
  }

  try {
    const docRef = doc(db, 'clientes', codigo);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      if (data.ativo === true) {
        return res.status(200).json({ valido: true });
      } else {
        return res.status(200).json({ valido: false });
      }
    } else {
      return res.status(200).json({ valido: false });
    }
  } catch (error) {
    return res.status(500).json({ valido: false, message: 'Erro no servidor' });
  }
}
