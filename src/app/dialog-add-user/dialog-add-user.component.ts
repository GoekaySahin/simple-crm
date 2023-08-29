import { Component, inject } from "@angular/core";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { User } from "../models/user.class";
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

@Component({
  selector: "app-dialog-add-user",
  templateUrl: "./dialog-add-user.component.html",
  styleUrls: ["./dialog-add-user.component.scss"],
})
export class DialogAddUserComponent {
  user: User = new User();
  birthDate: Date;
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  loading = false;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  userId;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    public route: ActivatedRoute
  ) {}

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    this.loading = true;
    const aCollection = collection(this.firestore, "users");
    await setDoc(doc(aCollection), this.user.toJSON()); // Die klasse muss in eine JSON umgewandelt werden (Manuel im models  )
    this.loading = false;
    this.closeDialogUsers();
    console.log("Benutzerdaten erfolgreich gespeichert.");
  }

  closeDialogUsers() {
    this.dialogRef.close();
  }
}
