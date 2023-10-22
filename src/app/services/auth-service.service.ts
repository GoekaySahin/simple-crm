import { Injectable, OnDestroy, inject } from "@angular/core";
import { Firestore, getFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { firebaseConfig } from "@environments/firebase-config";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Observable, Subscription } from "rxjs";
import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { Auth, User, user } from "@angular/fire/auth";

const provider = new GoogleAuthProvider();

@Injectable({
  providedIn: "root",
})
export class AuthServiceService implements OnDestroy {
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  auth = getAuth();
  loginData = false;
  user$ = user(this.auth);
  userSubscription: Subscription;

  constructor(private router: Router) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user);
      } else {
        this.router.navigate([""]);
        this.auth.signOut();
        console.log("User logged out else");
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  async creatUser(auth, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  async signInWithEmail(auth, email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.loginData = true;
        onAuthStateChanged(this.auth, (user) => {
          if (user) {
            const uid = user.uid;
            console.log(user);
          } else {
            console.log("User logged out");
          }
        });
        return this.loginData;
      })
      .catch((error) => {
        console.log(error.code);
        this.loginData = false;
        return this.loginData;
      });
  }
}
