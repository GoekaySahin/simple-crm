import { Component, inject } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { User } from "../models/user.class";
import { Firestore, collection, getFirestore } from "@angular/fire/firestore";
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
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  loading = false;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  userId;
  filled = false;
  firstName;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    public route: ActivatedRoute
  ) {}

  /**
   *
   * This function is to save the new added user
   *
   * @returns if not filled
   */
  async saveUser() {
    this.checkInput();
    if (this.filled == false) {
      return;
    }

    this.loading = true;
    const aCollection = collection(this.firestore, "users");
    await setDoc(doc(aCollection), this.user.toJSON());
    this.loading = false;
    this.closeDialogUsers();
  }

  /**
   * This function is to check if the something is typing in the input fileds
   */
  checkInput() {
    if (
      (this.user.firstName.length > 1,
      this.user.lastName.length > 1,
      this.user.email.length > 1)
    ) {
      this.filled = true;
    }
  }

  /**
   * This function is to close the dialog to add a new user
   */
  closeDialogUsers() {
    this.dialogRef.close();
  }
}
