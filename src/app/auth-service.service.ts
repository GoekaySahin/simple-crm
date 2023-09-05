import { Injectable, inject } from "@angular/core";
import { Firestore, getFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { firebaseConfig } from "@environments/firebase-config";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { Observable } from "rxjs";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  constructor(private router: Router) {}
  auth = getAuth();

  creatUser(auth, email, password) {
    console.log(auth, email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  signInWithEmail(auth, email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}
