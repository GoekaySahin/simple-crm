import { Component, inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogAddUserComponent } from "../dialog-add-user/dialog-add-user.component";
import { User } from "../models/user.class";
import { Observable } from "rxjs";
import { firebaseConfig } from "@environments/firebase-config";

import {
  Firestore,
  collection,
  collectionData,
  doc,
  setDoc,
  onSnapshot,
  getFirestore,
} from "@angular/fire/firestore";
import { initializeApp } from "firebase/app";
import { environment } from "@environments/environment";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent {
  user: User = new User();
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);

  constructor(public dialog: MatDialog) {}

  async ngOnInit() {
    const unsub = onSnapshot(doc(this.db, "user", "idUser"), (doc) => {
      console.log("Current data: ", doc.data());
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent);
  }
}
