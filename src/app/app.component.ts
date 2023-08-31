import { Component } from "@angular/core";

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
}
