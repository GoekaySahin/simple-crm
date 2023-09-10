import { Component, inject } from "@angular/core";
import { Costumer } from "../models/costumer.class";
import {
  Firestore,
  doc,
  getFirestore,
  updateDoc,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { initializeApp } from "@angular/fire/app";
import { firebaseConfig } from "@environments/firebase-config";
import { ActivatedRoute } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogAddUserComponent } from "../dialog-add-user/dialog-add-user.component";

@Component({
  selector: "app-dialog-edit-costumer-address",
  templateUrl: "./dialog-edit-costumer-address.component.html",
  styleUrls: ["./dialog-edit-costumer-address.component.scss"],
})
export class DialogEditCostumerAddressComponent {
  costumerId: string;
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  costumerRef;
  unsubscribe;
  costumer = new Costumer(); // wenn ich es nicht in eine klasse packe geht es zwar aber die konsole schmeißt ganze Zeit einen Fehler!
  loading = false;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    public route: ActivatedRoute
  ) {}

  closeDialogUsers() {
    this.dialogRef.close();
  }

  async saveCostumer() {
    this.loading = true;
    const costumerRef = doc(this.db, "costumer", this.costumerId);
    await updateDoc(costumerRef, this.costumer.toJSON());
    this.loading = false;
    this.closeDialogUsers();
  }

  cancel() {
    this.closeDialogUsers();
  }
}
