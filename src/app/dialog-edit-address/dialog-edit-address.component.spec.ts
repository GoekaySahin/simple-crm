import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogEditAddressComponent } from "./dialog-edit-address.component";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { environment } from "@environments/environment";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";

describe("DialogEditAddressComponent", () => {
  let component: DialogEditAddressComponent;
  let fixture: ComponentFixture<DialogEditAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        RouterModule.forRoot([]),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],

      declarations: [DialogEditAddressComponent],
    });
    fixture = TestBed.createComponent(DialogEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
