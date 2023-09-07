import { Component } from "@angular/core";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-imprint",
  templateUrl: "./imprint.component.html",
  styleUrls: ["./imprint.component.scss"],
})
export class ImprintComponent {
  constructor(private appComponent: AppComponent) {
    this.setCustomerToShow();
  }

  setCustomerToShow() {
    this.appComponent.imprintPage = true;
    this.appComponent.costumerPage = false;
    this.appComponent.dashboardPage = false;
    this.appComponent.privacyPage = false;
    this.appComponent.userPage = false;
  }
}
