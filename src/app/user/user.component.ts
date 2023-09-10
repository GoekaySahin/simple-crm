import { Component, inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogAddUserComponent } from "../dialog-add-user/dialog-add-user.component";
import { User } from "../models/user.class";
import { Observable } from "rxjs";
import { firebaseConfig } from "@environments/firebase-config";

import {
  Firestore,
  collection,
  onSnapshot,
  getFirestore,
} from "@angular/fire/firestore";
import { initializeApp } from "firebase/app";
import { AppComponent } from "../app.component";

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
  constructor(public dialog: MatDialog, private appComponent: AppComponent) {
    this.setUserdToShow();
  }

  setUserdToShow() {
    this.appComponent.dashboardPage = false;
    this.appComponent.privacyPage = false;
    this.appComponent.imprintPage = false;
    this.appComponent.costumerPage = false;
    this.appComponent.userPage = true;
  }

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
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent);
  }
}
