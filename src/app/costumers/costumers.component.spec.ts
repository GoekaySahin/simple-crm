import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CostumersComponent } from "./costumers.component";
import { AppComponent } from "../app.component";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "@environments/environment";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

describe("CostumersComponent", () => {
  let component: CostumersComponent;
  let fixture: ComponentFixture<CostumersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostumersComponent],
      imports: [
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        RouterModule.forRoot([]),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
      ],
      providers: [
        {
          provide: AppComponent,
          useValue: {},
        },
        { provide: MatDialogRef, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(CostumersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
