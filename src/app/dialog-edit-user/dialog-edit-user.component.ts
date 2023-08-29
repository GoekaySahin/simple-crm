import { Component, inject } from "@angular/core";
import { User } from "../models/user.class";
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

@Component({
  selector: "app-dialog-edit-user",
  templateUrl: "./dialog-edit-user.component.html",
  styleUrls: ["./dialog-edit-user.component.scss"],
})
export class DialogEditUserComponent {
  userId: string;
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
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
