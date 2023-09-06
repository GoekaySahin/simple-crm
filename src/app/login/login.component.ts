import { Component, ViewChild } from "@angular/core";
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
import { MatMenuTrigger } from "@angular/material/menu";
import { MatDialog } from "@angular/material/dialog";
import { DialogGuestLoginComponent } from "../dialog-guest-login/dialog-guest-login.component";

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

  getErrorMessage() {
    throw new Error("Method not implemented.");
  }
  constructor(
    private authService: AuthServiceService,
    public dialog: MatDialog
  ) {
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

  openDialog() {
    const dialogRef = this.dialog.open(DialogGuestLoginComponent, {
      restoreFocus: false,
    });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
}
