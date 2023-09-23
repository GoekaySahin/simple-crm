import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogEditUserComponent } from "./dialog-edit-user.component";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "@environments/environment";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { provideAnimations } from "@angular/platform-browser/animations";

describe("DialogEditUserComponent", () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forRoot([]),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
      ],
      declarations: [DialogEditUserComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        provideAnimations(),
      ],
    });
    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
