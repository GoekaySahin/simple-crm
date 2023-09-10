import { Component } from "@angular/core";
import { AuthServiceService } from "../auth-service.service";
import { FormControl, Validators } from "@angular/forms";
import { UserLogin } from "../models/userLogin.class";
import { MyErrorStateMatcher } from "../error-state-matche/error-state-matche.component";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  email: string;
  auth = getAuth();
  user: string;
  password: string;
  correct = false;

  emailValid = false;

  constructor(private authService: AuthServiceService, private router: Router) {
    this.emailFormControl.valueChanges.subscribe((value) => {
      if (this.emailFormControl.valid) {
        this.handleValidEmail();
      } else {
        this.handleInvalidEmail();
      }
    });
  }

  handleValidEmail() {
    this.emailValid = true;
  }

  handleInvalidEmail() {
    this.emailValid = false;
  }

  passwordEnterChecker() {
    if (this.password == undefined) {
      return '';
    }
    return this.password.length > 7;
  }

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  getErrorMessage() {
    throw new Error("Method not implemented.");
  }

  register() {
    this.authService.creatUser(this.auth, this.email, this.password);
    this.correct = true;
    this.clearInputs();
    setTimeout(() => {
      this.toLogin();
    }, 1800);
  }

  async toLogin() {
    this.router.navigate([""]);
  }

  clearInputs() {
    this.email = "";
    this.password = "";
  }
}
