import { Component } from "@angular/core";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-password-email-wrong",
  templateUrl: "./password-email-wrong.component.html",
  styleUrls: ["./password-email-wrong.component.scss"],
})
export class PasswordEmailWrongComponent {
  constructor(public dialog: MatDialog) {}
}
