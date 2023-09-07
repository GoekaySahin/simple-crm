import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "simplecrm";
  privacyPage = false;
  imprintPage = false;
  costumerPage = false;
  userPage = false;
  dashboardPage = false;

  constructor(private router: Router) {}
  @ViewChild("drawer") drawer!: MatDrawer;

  toDashboard() {
    this.router.navigate(["dashboard"]);
    this.drawer.toggle();
  }

  toUser() {
    this.router.navigate(["user"]);
    this.drawer.toggle();
  }

  toCostumer() {
    this.router.navigate(["costumer"]);
    this.drawer.toggle();
  }

  toPrivacy() {
    this.router.navigate(["privacy"]);
    this.drawer.toggle();
  }

  toImprint() {
    this.router.navigate(["imprint"]);
    this.drawer.toggle();
  }

  toLogin() {
    this.router.navigate([""]);
    this.drawer.toggle();
  }
}
