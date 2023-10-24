import { Component, OnInit, ViewChild } from "@angular/core";
import { getAuth } from "firebase/auth";
import { MyErrorStateMatcher } from "../error-state-matche/error-state-matche.component";
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from "@angular/forms";
import { AuthServiceService } from "../services/auth-service.service";
import { UserLogin } from "../models/userLogin.class";
import { MatMenuTrigger } from "@angular/material/menu";
import { MatDialog } from "@angular/material/dialog";
import { DialogGuestLoginComponent } from "../dialog-guest-login/dialog-guest-login.component";
import { Router } from "@angular/router";
import { GoogleLoginService } from "../services/google-login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  @ViewChild("menuTrigger") menuTrigger: MatMenuTrigger;
  userLogin = new UserLogin();
  email: any;
  emailValid = false;
  passwordEnter = false;
  password: string = "";
  hide = true;
  auth = getAuth();
  loginData = false;
  loginFail = false;
  /*   emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]); */
  form: FormGroup;
  control: FormControl = new FormControl("value", Validators.minLength(2));

  async setValue() {
    this.control.setValue("new value");
  }

  matcher = new MyErrorStateMatcher();

  /**
   * This function is to show the error message
   */
  getErrorMessage() {
    throw new Error("Method not implemented.");
  }

  constructor(
    private authService: AuthServiceService,
    public dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private google_login: GoogleLoginService
  ) {
    this.form = fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    // Das Formular ist gültig, hier kannst du die Daten senden oder verarbeiten
    const formData = this.form.value;
    this.login(formData.email, formData.password);
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
   * This function check the length of the password
   */
  passwordEnterChecker() {
    return this.password.length > 7;
  }

  /**
   * This function will check the logindata
   */
  async login(email, password) {
    let correct = await this.authService.signInWithEmail(
      this.auth,
      email,
      password
    );
    if (correct) {
      this.router.navigate(["dashboard"]);
    } else {
      this.loginFail = true;
      this.clearInputs();
      setTimeout(() => {
        this.loginFail = false;
      }, 3200);
    }
  }

  clearInputs() {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  /**
   * This function will set the var loginData true;
   */
  loginTrue() {
    this.loginData = true;
  }

  /**
   * This function will close the dialog in the right way
   */
  openDialog() {
    const dialogRef = this.dialog.open(DialogGuestLoginComponent, {
      restoreFocus: false,
    });
    dialogRef.afterClosed().subscribe();
  }

  signInWithGoogle() {
    this.google_login.googleLogin();
  }
}
