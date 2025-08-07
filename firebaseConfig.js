
// Configuração do Firebase para o projeto 'aproveitai'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnegX0BvQbHlYeB3r0L_2DemiEkRXZnOo",
  authDomain: "aproveitai.firebaseapp.com",
  projectId: "aproveitai",
  storageBucket: "aproveitai.appspot.com",
  messagingSenderId: "536504520983",
  appId: "1:536504520983:web:xxxxxxxxxxxxxx" // Você pode adicionar depois
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default firebaseConfig;
