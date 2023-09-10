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
import { Costumer } from "../models/costumer.class";
import { DialogEditCostumerComponent } from "../dialog-edit-costumer/dialog-edit-costumer.component";
import { DialogEditCostumerAddressComponent } from "../dialog-edit-costumer-address/dialog-edit-costumer-address.component";

@Component({
  selector: "app-costumer-detail",
  templateUrl: "./costumer-detail.component.html",
  styleUrls: ["./costumer-detail.component.scss"],
})
export class CostumerDetailComponent {
  costumerId: string;
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  costumerRef;
  unsubscribe;
  costumer = new Costumer(); // wenn ich es nicht in eine klasse packe geht es zwar aber die konsole schmeißt ganze Zeit einen Fehler!
  loading = false;
  empty: boolean = false;

  constructor(public dialog: MatDialog, public route: ActivatedRoute) {
    this.route.paramMap.subscribe((paramMap) => {
      this.costumerId = paramMap.get("id");
      this.getUser(this.costumerId);
    });
  }

  getUser(id) {
    this.costumerRef = doc(this.db, "costumer", id); // user über doc geholt weil bei collect kann man keine id mitgeben
    this.unsubscribe = onSnapshot(this.costumerRef, (docSnapshot) => {
      this.costumer = new Costumer(docSnapshot.data());
    });
    this.checkIfNoticeEmpty();
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditCostumerComponent);
    dialog.componentInstance.costumer = new Costumer(this.costumer);
    dialog.componentInstance.costumerId = this.costumerId;
  }

  editAddress() {
    const dialog = this.dialog.open(DialogEditCostumerAddressComponent);
    dialog.componentInstance.costumer = new Costumer(this.costumer);
    dialog.componentInstance.costumerId = this.costumerId;
  }

  checkIfNoticeEmpty() {
    if (this.costumer.notice == "") {
      this.empty = true;
    } else {
      this.empty = false;
    }
  }
}
