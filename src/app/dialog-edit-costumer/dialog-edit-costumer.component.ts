import { Component, inject } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { DialogAddUserComponent } from "../dialog-add-user/dialog-add-user.component";
import {
  Firestore,
  doc,
  getFirestore,
  updateDoc,
} from "@angular/fire/firestore";
import { initializeApp } from "@angular/fire/app";
import { firebaseConfig } from "@environments/firebase-config";
import { Observable } from "rxjs";
import { Costumer } from "../models/costumer.class";

@Component({
  selector: "app-dialog-edit-costumer",
  templateUrl: "./dialog-edit-costumer.component.html",
  styleUrls: ["./dialog-edit-costumer.component.scss"],
})
export class DialogEditCostumerComponent {
  costumerId: string;
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  costumer = new Costumer();
  loading = false;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    public route: ActivatedRoute
  ) {}

  /**
   * This function is to close the dialog to edit the costumer
   */
  closeDialogUsers() {
    this.dialogRef.close();
  }

  /**
   * This function is to save the edited data from the costumer
   */
  async saveCostumer() {
    this.loading = true;
    const userRef = doc(this.db, "users", this.costumerId);
    await updateDoc(userRef, this.costumer.toJSON());
    this.loading = false;
    this.closeDialogUsers();
  }

  /**
   * This function is to cancel the edit process
   */
  cancel() {
    this.closeDialogUsers();
  }
}
