import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CostumerDetailComponent } from "./costumer-detail.component";
import { MatDialogModule } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "@environments/environment";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

describe("CostumerDetailComponent", () => {
  let component: CostumerDetailComponent;
  let fixture: ComponentFixture<CostumerDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostumerDetailComponent],
      imports: [
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        RouterModule.forRoot([]),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
      ],
    });
    fixture = TestBed.createComponent(CostumerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
