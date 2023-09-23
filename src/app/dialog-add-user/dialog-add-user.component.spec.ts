import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogAddUserComponent } from "./dialog-add-user.component";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "@environments/environment";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgChartsModule } from "ng2-charts";

describe("DialogAddUserComponent", () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAddUserComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }],
      imports: [
        RouterModule.forRoot([]),
        MatDialogModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
        MatFormFieldModule,
        NgChartsModule,
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
