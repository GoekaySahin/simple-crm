import { Component, ElementRef, ViewChild, inject } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Firestore, collection, getFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { doc, setDoc } from "firebase/firestore";
import { firebaseConfig } from "@environments/firebase-config";
import { initializeApp } from "@angular/fire/app";
import { ActivatedRoute } from "@angular/router";
import { Costumer } from "../models/costumer.class";

@Component({
  selector: "app-dialogaddcostumer",
  templateUrl: "./dialogaddcostumer.component.html",
  styleUrls: ["./dialogaddcostumer.component.scss"],
})
export class DialogaddcostumerComponent {
  @ViewChild("costumerName") name: ElementRef;
  costumer: Costumer = new Costumer();
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  loading = false;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  CostumerId;
  filled = false;

  constructor(
    public dialogRef: MatDialogRef<DialogaddcostumerComponent>,
    public route: ActivatedRoute
  ) {
    setTimeout(() => {
      this.focus();
    }, 200);
  }

  /**
   * This function is to manuely focus on a input
   */
  focus() {
    const inputElement: HTMLInputElement = this.name.nativeElement;
    inputElement.focus();
  }

  /**
   * This function is to add and save the new costumer
   *
   * @returns if not filled
   */
  async saveCostumer() {
    this.checkInput();
    if (this.filled == false) {
      return;
    }

    this.loading = true;
    const aCollection = collection(this.firestore, "costumer");
    await setDoc(doc(aCollection), this.costumer.toJSON()); // Die klasse muss in eine JSON umgewandelt werden (Manuel im models  )
    this.loading = false;
    this.closeDialogCostumer();
  }

  /**
   * Checks if value is in input
   */
  checkInput() {
    if (
      (this.costumer.name.length > 1,
      this.costumer.street.length > 1,
      this.costumer.email.length > 1,
      this.costumer.city.length > 1)
    ) {
      this.filled = true;
    }
  }

  /**
   * Close the add costumer dialog
   */
  closeDialogCostumer() {
    this.dialogRef.close();
  }
}
