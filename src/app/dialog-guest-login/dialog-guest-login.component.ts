import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-dialog-guest-login",
  templateUrl: "./dialog-guest-login.component.html",
  styleUrls: ["./dialog-guest-login.component.scss"],
})
export class DialogGuestLoginComponent {
  constructor(private router: Router, public dialog: MatDialog) {}

  /**
   * This function is to navigate to dashboard
   */
  goDashboard() {
    this.router.navigate(["dashboard"]);
    this.dialog.closeAll();
  }
}
