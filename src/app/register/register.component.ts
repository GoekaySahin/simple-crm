import { Component } from "@angular/core";
import { AuthServiceService } from "../auth-service.service";
import { FormControl, Validators } from "@angular/forms";
import { MyErrorStateMatcher } from "../error-state-matche/error-state-matche.component";
import { getAuth } from "firebase/auth";
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
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private authService: AuthServiceService, private router: Router) {
    this.emailFormControl.valueChanges.subscribe((value) => {
      if (this.emailFormControl.valid) {
        this.handleValidEmail();
      } else {
        this.handleInvalidEmail();
      }
    });
  }

  /**
   * This function handle the right email
   */
  handleValidEmail() {
    this.emailValid = true;
  }

  /**
   * This function handle the wrong email
   */
  handleInvalidEmail() {
    this.emailValid = false;
  }

  /**
   * This function check if password is define
   */
  passwordEnterChecker() {
    if (this.password == undefined) {
      return "";
    }
    return this.password.length > 7;
  }

  /**
   * This function will throw a error
   */
  getErrorMessage() {
    throw new Error("Method not implemented.");
  }

  /**
   * This function is to register new user
   */
  register() {
    this.authService.creatUser(this.auth, this.email, this.password);
    this.correct = true;
    this.clearInputs();
    setTimeout(() => {
      this.toLogin();
    }, 1800);
  }

  /**
   * This function will navigate to dashboard if login is successful
   */
  async toLogin() {
    this.router.navigate([""]);
  }

  /**
   * This function will clear the input fileds
   */
  clearInputs() {
    this.email = "";
    this.password = "";
  }
}
