import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const environment = {
  firebase: {
    projectId: "simple-crm-bd583",
    appId: "1:398615619924:web:9c5716a77a3cee078800c1",
    storageBucket: "simple-crm-bd583.appspot.com",
    apiKey: "AIzaSyA_4XTtNj0T2Kxs8BiZSfdildPzVY82Nxc",
    authDomain: "simple-crm-bd583.firebaseapp.com",
    messagingSenderId: "398615619924",
  },
  production: false,
};

export const firebaseConfig = {
  apiKey: "AIzaSyA_4XTtNj0T2Kxs8BiZSfdildPzVY82Nxc",
  authDomain: "simple-crm-bd583.firebaseapp.com",
  projectId: "simple-crm-bd583",
  storageBucket: "simple-crm-bd583.appspot.com",
  messagingSenderId: "398615619924",
  appId: "1:398615619924:web:9c5716a77a3cee078800c1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
