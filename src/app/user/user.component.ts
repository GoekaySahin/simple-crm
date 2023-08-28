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
  DocumentData,
  getDocs,
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
  allUsers = [];
  constructor(public dialog: MatDialog) {}

  async ngOnInit() {
    const unsub = onSnapshot(collection(this.db, "users"), (querySnapshot) => {
      const usersData: User[] = [];

      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          const userData = doc.data() as User;
          userData.id = doc.id;
          usersData.push(userData);
        }
      });

      this.allUsers = usersData;
      console.log(usersData);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent);
  }
}
