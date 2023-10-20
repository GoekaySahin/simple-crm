import { Component, inject } from "@angular/core";
import { initializeApp } from "@angular/fire/app";
import {
  Firestore,
  doc,
  getFirestore,
  onSnapshot,
} from "@angular/fire/firestore";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { firebaseConfig } from "@environments/firebase-config";
import { Observable } from "rxjs";
import { User } from "../models/user.class";
import { DialogEditAddressComponent } from "../dialog-edit-address/dialog-edit-address.component";
import { DialogEditUserComponent } from "../dialog-edit-user/dialog-edit-user.component";
import { DialogUserDeleteComponent } from "../dialog-user-delete/dialog-user-delete.component";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"],
})
export class UserDetailComponent {
  userId: string;
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  userRef;
  unsubscribe;
  user = new User(); // wenn ich es nicht in eine klasse packe geht es zwar aber die konsole schmeißt ganze Zeit einen Fehler!
  loading = false;

  constructor(public dialog: MatDialog, public route: ActivatedRoute) {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get("id");
      this.getUser(this.userId);
    });
  }

  /**
   * This function is to get the right user with his id
   *
   * @param id hash number
   */
  getUser(id) {
    this.userRef = doc(this.db, "users", id); // user über doc geholt weil bei collect kann man keine id mitgeben
    this.unsubscribe = onSnapshot(this.userRef, (docSnapshot) => {
      this.user = new User(docSnapshot.data());
    });
  }

  /**
   * This function is to open the right editable dialog
   */
  editMenu() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
  }

  /**
   * This Function is to open the right editable dialog for the address
   */
  editAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
  }

  deleteUser() {
    const dialog = this.dialog.open(DialogUserDeleteComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
  }
}
