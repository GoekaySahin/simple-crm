import { Component, ViewChild } from "@angular/core";
import { getAuth } from "firebase/auth";
import { MyErrorStateMatcher } from "../error-state-matche/error-state-matche.component";
import { FormControl, Validators } from "@angular/forms";
import { AuthServiceService } from "../auth-service.service";
import { UserLogin } from "../models/userLogin.class";
import { MatMenuTrigger } from "@angular/material/menu";
import { MatDialog } from "@angular/material/dialog";
import { DialogGuestLoginComponent } from "../dialog-guest-login/dialog-guest-login.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  @ViewChild("menuTrigger") menuTrigger: MatMenuTrigger;
  userLogin = new UserLogin();
  email: any;
  emailValid = false;
  passwordEnter = false;
  password: string = "";
  hide = true;
  auth = getAuth();
  loginData = false;
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
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
    private router: Router
  ) {
    this.emailFormControl.valueChanges.subscribe((value) => {
      if (this.emailFormControl.valid) {
        this.handleValidEmail();
      } else {
        this.handleInvalidEmail();
      }
    });
  }

  closeWrong() {
    /* this.fail = false; */
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
  async login() {
    let correct = await this.authService.signInWithEmail(
      this.auth,
      this.email,
      this.password
    );
    if (correct) {
      this.router.navigate(["dashboard"]);
    }
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
}
