import { Component } from "@angular/core";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  ErrorStateMatcheComponent,
  MyErrorStateMatcher,
} from "../error-state-matche/error-state-matche.component";
import { FormControl, Validators } from "@angular/forms";
import { AuthServiceService } from "../auth-service.service";
import { UserLogin } from "../models/userLogin.class";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  userLogin = new UserLogin();
  email: any;
  emailValid = false;
  passwordEnter = false;
  password: string = "";
  hide = true;
  auth = getAuth();
  getErrorMessage() {
    throw new Error("Method not implemented.");
  }
  constructor(private authService: AuthServiceService) {
    this.emailFormControl.valueChanges.subscribe((value) => {
      if (this.emailFormControl.valid) {
        this.handleValidEmail();
      } else {
        this.handleInvalidEmail();
      }
    });
  }

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  handleValidEmail() {
    this.emailValid = true;
  }

  handleInvalidEmail() {
    this.emailValid = false;
  }

  passwordEnterChecker() {
    return this.password.length > 7;
  }

  async login() {
    console.log(this.password, this.email, this.auth);
    this.authService.signInWithEmail(this.auth, this.email, this.password);
  }

  matcher = new MyErrorStateMatcher();
}
