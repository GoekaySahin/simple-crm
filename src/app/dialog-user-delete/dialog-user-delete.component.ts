import { Component, OnInit, inject } from "@angular/core";
import { initializeApp } from "@angular/fire/app";
import { Firestore, getFirestore } from "@angular/fire/firestore";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { firebaseConfig } from "@environments/firebase-config";
import { doc, deleteDoc } from "firebase/firestore";

@Component({
  selector: "app-dialog-user-delete",
  templateUrl: "./dialog-user-delete.component.html",
  styleUrls: ["./dialog-user-delete.component.scss"],
})
export class DialogUserDeleteComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  user;
  userId;
  loading = false;

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {}

  async deleteUser() {
    console.log(this.user);
    debugger;
    console.log(await deleteDoc(doc(this.db, "users", this.userId)));
    this.router.navigate(["user"]);
    this.dialog.closeAll();
  }

  closeDialog() {}
}
