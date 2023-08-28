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

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    this.loading = true;
    const aCollection = collection(this.firestore, "user");
    await setDoc(doc(aCollection, "idUser"), this.user.toJSON()); // Die klasse muss in eine JSON umgewandelt werden (Manuel im models  )
    this.loading = false;
    this.dialogRef.close();
    console.log("Benutzerdaten erfolgreich gespeichert.");
  }
}
