import { TestBed } from "@angular/core/testing";

import { AuthServiceService } from "./auth-service.service";
import { environment } from "@environments/environment";
import {
  FirebaseApp,
  initializeApp,
  provideFirebaseApp,
} from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";

describe("AuthServiceService", () => {
  let service: AuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [{ provide: FirebaseApp, useValue: {} }],
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
      ],
    });

    service = TestBed.inject(AuthServiceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
