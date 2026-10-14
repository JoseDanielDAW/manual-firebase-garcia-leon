// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// 1. Importa getFirestore
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxQ2uZQ7Nv1G44wTzC9roh8zL2FeKbpwM",
  authDomain: "gestor-de-tareas-905bd.firebaseapp.com",
  projectId: "gestor-de-tareas-905bd",
  storageBucket: "gestor-de-tareas-905bd.firebasestorage.app",
  messagingSenderId: "894655765425",
  appId: "1:894655765425:web:9f39041afed2706a913b90",
  measurementId: "G-M88HFVV4F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 2. Inicializa Firestore y expórtalo como 'db'
export const db = getFirestore(app);