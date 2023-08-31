import { Component, inject } from "@angular/core";

import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import {
  Firestore,
  collection,
  collectionData,
  getFirestore,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { doc, setDoc } from "firebase/firestore";
import { firebaseConfig } from "@environments/firebase-config";
import { initializeApp } from "@angular/fire/app";
import { ActivatedRoute } from "@angular/router";
import { Costumer } from "../models/costumer.class";
import { CostumersComponent } from "../costumers/costumers.component";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-dialogaddcostumer",
  templateUrl: "./dialogaddcostumer.component.html",
  styleUrls: ["./dialogaddcostumer.component.scss"],
})
export class DialogaddcostumerComponent {
  costumer: Costumer = new Costumer();
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  loading = false;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  CostumerId;

  constructor(
    public dialogRef: MatDialogRef<DialogaddcostumerComponent>,
    public route: ActivatedRoute
  ) {}

  async saveCostumer() {
    this.loading = true;
    const aCollection = collection(this.firestore, "costumer");
    await setDoc(doc(aCollection), this.costumer.toJSON()); // Die klasse muss in eine JSON umgewandelt werden (Manuel im models  )
    this.loading = false;
    this.closeDialogCostumer();
    console.log("Benutzerdaten erfolgreich gespeichert.");
    console.log(this.costumer);
  }

  closeDialogCostumer() {
    this.dialogRef.close();
  }
}
