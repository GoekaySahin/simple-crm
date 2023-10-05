import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserComponent } from "./user/user.component";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { DialogAddUserComponent } from "./dialog-add-user/dialog-add-user.component";
import { MatDialogModule } from "@angular/material/dialog";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { FormsModule } from "@angular/forms";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "../environments/environment";
import { provideDatabase, getDatabase } from "@angular/fire/database";
import {
  provideFirestore,
  getFirestore,
  FirestoreModule,
} from "@angular/fire/firestore";
import { provideFunctions, getFunctions } from "@angular/fire/functions";
import { provideStorage, getStorage } from "@angular/fire/storage";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatCardModule } from "@angular/material/card";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { MatMenuModule } from "@angular/material/menu";
import { DialogEditAddressComponent } from "./dialog-edit-address/dialog-edit-address.component";
import { DialogEditUserComponent } from "./dialog-edit-user/dialog-edit-user.component";
import { CostumersComponent } from "./costumers/costumers.component";
import { DialogaddcostumerComponent } from "./dialogaddcostumer/dialogaddcostumer.component";
import { DialogEditCostumerComponent } from "./dialog-edit-costumer/dialog-edit-costumer.component";
import { CostumerDetailComponent } from "./costumer-detail/costumer-detail.component";
import { DialogEditCostumerAddressComponent } from "./dialog-edit-costumer-address/dialog-edit-costumer-address.component";
import { Component } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { NgIf } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { AuthServiceService } from "./services/auth-service.service";
import { RegisterComponent } from "./register/register.component";
import { NgChartsModule } from "ng2-charts";
import { DialogGuestLoginComponent } from "./dialog-guest-login/dialog-guest-login.component";
import { ImprintComponent } from "./imprint/imprint.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    DialogAddUserComponent,
    UserDetailComponent,
    DialogEditAddressComponent,
    DialogEditUserComponent,
    CostumersComponent,
    DialogaddcostumerComponent,
    DialogEditCostumerComponent,
    CostumerDetailComponent,
    LoginComponent,
    DialogEditCostumerAddressComponent,
    RegisterComponent,
    DialogGuestLoginComponent,
    ImprintComponent,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    FirestoreModule,
    MatProgressBarModule,
    MatMenuModule,
    HttpClientModule,
  ],

  providers: [
    AuthServiceService,
    Validators,
    NgForm,
    FormGroupDirective,
    FormControl,
    ErrorStateMatcher,
    NgIf,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
