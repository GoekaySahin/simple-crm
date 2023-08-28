import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"],
})
export class UserDetailComponent {
  userId: string;
  constructor(public dialog: MatDialog, public route: ActivatedRoute) {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get("id");
      console.log("got id: " + this.userId);
    });
  }
}
