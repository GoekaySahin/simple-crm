import { firebaseConfig } from "./firebase-config"; // Passe den Pfad entsprechend an

export const environment = {
  firebase: firebaseConfig,
  production: false,
};
/* 
export const firebaseConfig = {
  apiKey: "AIzaSyA_4XTtNj0T2Kxs8BiZSfdildPzVY82Nxc",
  authDomain: "simple-crm-bd583.firebaseapp.com",
  projectId: "simple-crm-bd583",
  storageBucket: "simple-crm-bd583.appspot.com",
  messagingSenderId: "398615619924",
  appId: "1:398615619924:web:9c5716a77a3cee078800c1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); */
