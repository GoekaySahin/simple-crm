import { Component } from "@angular/core";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  constructor(private appComponent: AppComponent) {
    this.setDashboardToShow();
  }
  setDashboardToShow() {
    this.appComponent.dashboardPage = true;
    this.appComponent.privacyPage = false;
    this.appComponent.imprintPage = false;
    this.appComponent.costumerPage = false;
    this.appComponent.userPage = false;
  }
}
