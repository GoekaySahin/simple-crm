import { Component } from "@angular/core";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-privacy",
  templateUrl: "./privacy.component.html",
  styleUrls: ["./privacy.component.scss"],
})
export class PrivacyComponent {
  constructor(private appComponent: AppComponent) {
    this.setCustomerToShow();
  }

  setCustomerToShow() {
    this.appComponent.privacyPage = true;
    this.appComponent.costumerPage = false;
    this.appComponent.dashboardPage = false;
    this.appComponent.imprintPage = false;
    this.appComponent.userPage = false;
  }
}
