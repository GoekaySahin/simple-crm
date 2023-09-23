import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DialogEditCostumerAddressComponent } from "./dialog-edit-costumer-address.component";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { provideAnimations } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "@environments/environment";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

describe("DialogEditCostumerAddressComponent", () => {
  let component: DialogEditCostumerAddressComponent;
  let fixture: ComponentFixture<DialogEditCostumerAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogEditCostumerAddressComponent],
      imports: [
        RouterModule.forRoot([]),
        MatDialogModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        provideAnimations(),
      ],
    });
    fixture = TestBed.createComponent(DialogEditCostumerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
