import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogEditCostumerComponent } from "./dialog-edit-costumer.component";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "@environments/environment";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { MatFormFieldModule } from "@angular/material/form-field";

describe("DialogEditCostumerComponent", () => {
  let component: DialogEditCostumerComponent;
  let fixture: ComponentFixture<DialogEditCostumerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogEditCostumerComponent],
      imports: [
        RouterModule.forRoot([]),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
        MatDialogModule,
        RouterModule.forRoot([]),
        MatFormFieldModule,
      ],

      providers: [{ provide: MatDialogRef, useValue: {} }],
    });
    fixture = TestBed.createComponent(DialogEditCostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
