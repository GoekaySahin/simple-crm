import { Component, inject } from "@angular/core";
import { AppComponent } from "../app.component";
import { MatDialog } from "@angular/material/dialog";
import { DialogAddUserComponent } from "../dialog-add-user/dialog-add-user.component";
import { Costumer } from "../models/costumer.class";
import { Observable } from "rxjs";
import { firebaseConfig } from "@environments/firebase-config";

import {
  Firestore,
  collection,
  onSnapshot,
  getFirestore,
} from "@angular/fire/firestore";
import { initializeApp } from "firebase/app";
import { DialogaddcostumerComponent } from "../dialogaddcostumer/dialogaddcostumer.component";

@Component({
  selector: "app-costumers",
  templateUrl: "./costumers.component.html",
  styleUrls: ["./costumers.component.scss"],
})
export class CostumersComponent {
  costumer: Costumer = new Costumer();
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  allCostumer = [];

  constructor(private appComponent: AppComponent, public dialog: MatDialog) {
    this.setCustomerToShow();
  }
  setCustomerToShow() {
    this.appComponent.costumerPage = true;
    this.appComponent.dashboardPage = false;
    this.appComponent.privacyPage = false;
    this.appComponent.imprintPage = false;
    this.appComponent.userPage = false;
  }

  async ngOnInit() {
    const unsub = onSnapshot(
      collection(this.db, "costumer"),
      (querySnapshot) => {
        const costumersData: Costumer[] = [];

        querySnapshot.forEach((doc) => {
          if (doc.exists()) {
            const costumerData = doc.data() as Costumer;
            costumerData.id = doc.id;
            costumersData.push(costumerData);
            console.log(costumerData);
          }
        });

        this.allCostumer = costumersData;
        console.log(costumersData);
      }
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogaddcostumerComponent);
  }
}
