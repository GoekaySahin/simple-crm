import { Component, inject } from "@angular/core";
import { User } from "../models/user.class";
import {
  DocumentReference,
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

@Component({
  selector: "app-dialog-edit-address",
  templateUrl: "./dialog-edit-address.component.html",
  styleUrls: ["./dialog-edit-address.component.scss"],
})
export class DialogEditAddressComponent {
  userId: string;
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  userRef: DocumentReference;
  user = new User();
  loading = false;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogEditAddressComponent>,
    public route: ActivatedRoute
  ) {}

  /**
   * This function is to close the dialog to edit the users addresss
   */
  closeDialogUsers() {
    this.dialogRef.close();
  }

  /**
   * This function is to save the edited address data from the user
   */
  async saveUser() {
    this.loading = true;
    const userRef = doc(this.db, "users", this.userId);
    await updateDoc(userRef, this.user.toJSON());
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
