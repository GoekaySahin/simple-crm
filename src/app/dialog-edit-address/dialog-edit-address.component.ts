import { Component, inject } from "@angular/core";
import { User } from "../models/user.class";
import {
  Firestore,
  doc,
  getFirestore,
  onSnapshot,
  updateDoc,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { initializeApp } from "@angular/fire/app";
import { firebaseConfig } from "@environments/firebase-config";
import { ActivatedRoute } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogAddUserComponent } from "../dialog-add-user/dialog-add-user.component";

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
  userRef;
  unsubscribe;
  user = new User(); // wenn ich es nicht in eine klasse packe geht es zwar aber die konsole schmeißt ganze Zeit einen Fehler!
  loading = false;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    public route: ActivatedRoute
  ) {}

  closeDialogUsers() {
    this.dialogRef.close();
  }

  async saveUser() {
    this.loading = true;
    const userRef = doc(this.db, "users", this.userId);
    await updateDoc(userRef, this.user.toJSON());
    console.log("Daten erfolgreich aktualisiert!");
    this.loading = false;
    this.closeDialogUsers();
  }
}
