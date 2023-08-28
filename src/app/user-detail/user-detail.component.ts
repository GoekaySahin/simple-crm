import { Component, inject } from "@angular/core";
import { initializeApp } from "@angular/fire/app";
import {
  Firestore,
  collection,
  doc,
  docSnapshots,
  getFirestore,
  onSnapshot,
} from "@angular/fire/firestore";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { firebaseConfig } from "@environments/firebase-config";
import { Observable, Subscribable } from "rxjs";
import { User } from "../models/user.class";

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

  constructor(public dialog: MatDialog, public route: ActivatedRoute) {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get("id");
      this.getUser(this.userId);
    });
  }

  getUser(id) {
    this.userRef = doc(this.db, "users", id); // user über doc geholt weil bei collect kann man keine id mitgeben
    this.unsubscribe = onSnapshot(this.userRef, (docSnapshot) => {
      console.log("dok: ", docSnapshot.data());
      this.user = new User(docSnapshot.data());
    });
  }
}
