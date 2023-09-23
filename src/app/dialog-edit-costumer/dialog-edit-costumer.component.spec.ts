import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogEditCostumerComponent } from "./dialog-edit-costumer.component";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "@environments/environment";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { provideAnimations } from "@angular/platform-browser/animations";

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
        FormsModule,
        MatInputModule,
      ],

      providers: [{ provide: MatDialogRef, useValue: {} }, provideAnimations()],
    });
    fixture = TestBed.createComponent(DialogEditCostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
