import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-password-email-wrong",
  templateUrl: "./password-email-wrong.component.html",
  styleUrls: ["./password-email-wrong.component.scss"],
})
export class PasswordEmailWrongComponent {
  constructor(public dialog: MatDialog) {}
}
