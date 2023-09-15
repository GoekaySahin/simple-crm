import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserComponent } from "./user/user.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { CostumersComponent } from "./costumers/costumers.component";
import { CostumerDetailComponent } from "./costumer-detail/costumer-detail.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { ImprintComponent } from "./imprint/imprint.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserComponent },
  { path: "user/:id", component: UserDetailComponent },
  { path: "costumer", component: CostumersComponent },
  { path: "costumer/:id", component: CostumerDetailComponent },
  { path: "register", component: RegisterComponent },
  { path: "privacy", component: PrivacyComponent },
  { path: "imprint", component: ImprintComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
