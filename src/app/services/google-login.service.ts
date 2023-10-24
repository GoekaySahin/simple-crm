import { Injectable, inject } from "@angular/core";
import { initializeApp } from "@angular/fire/app";
import { Firestore, getFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { firebaseConfig } from "@environments/firebase-config";
import {
  Auth,
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  getRedirectResult,
} from "@firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

@Injectable({
  providedIn: "root",
})
export class GoogleLoginService {
  firestore: Firestore = inject(Firestore);
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  auth = getAuth();
  loginData = false;
  provider = new GoogleAuthProvider();

  constructor(private router: Router) {}

  /*   
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //sign in with google redirect works, but it redirect first to /login than to /dashboard after 1 or 2 sec.
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
  googleSignIn() {
    return this.fireauth.signInWithRedirect(this.provider).then((res) => {
      this.router.navigate(["/dashboard"]);
    });
  } */

  async googleLogin() {
    return await signInWithPopup(this.auth, this.provider).then((res) => {
      this.router.navigate(["/dashboard"]);
      localStorage.setItem("token", JSON.stringify(res.user?.uid));
    });
  }
}
