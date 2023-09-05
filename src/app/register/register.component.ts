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

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

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
