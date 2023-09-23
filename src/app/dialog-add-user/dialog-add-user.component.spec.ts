import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogAddUserComponent } from "./dialog-add-user.component";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "@environments/environment";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgChartsModule } from "ng2-charts";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { provideAnimations } from "@angular/platform-browser/animations";

describe("DialogAddUserComponent", () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAddUserComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }, provideAnimations()],
      imports: [
        RouterModule.forRoot([]),
        MatDialogModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
        MatFormFieldModule,
        NgChartsModule,
        FormsModule,
        MatInputModule,
      ],
    });
    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
