import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserComponent } from "./user/user.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { CostumersComponent } from "./costumers/costumers.component";
import { CostumerDetailComponent } from "./costumer-detail/costumer-detail.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserComponent },
  { path: "user/:id", component: UserDetailComponent },
  { path: "costumer", component: CostumersComponent },
  { path: "costumer/:id", component: CostumerDetailComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
