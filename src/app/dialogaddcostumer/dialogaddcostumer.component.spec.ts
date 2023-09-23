import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogaddcostumerComponent } from "./dialogaddcostumer.component";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "@environments/environment";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgChartsModule } from "ng2-charts";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { provideAnimations } from "@angular/platform-browser/animations";

describe("DialogaddcostumerComponent", () => {
  let component: DialogaddcostumerComponent;
  let fixture: ComponentFixture<DialogaddcostumerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogaddcostumerComponent],
      imports: [
        RouterModule.forRoot([]),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
        MatFormFieldModule,
        NgChartsModule,
        FormsModule,
        MatInputModule,
      ],

      providers: [
        { provide: MatDialogRef, useValue: {} }, // Mock MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: {} }, // Mock MAT_DIALOG_DATA,
        provideAnimations(),
      ],
    });
    fixture = TestBed.createComponent(DialogaddcostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
