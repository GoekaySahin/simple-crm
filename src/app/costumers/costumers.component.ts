import { Component, ElementRef, OnInit, ViewChild, inject } from "@angular/core";
import { AppComponent } from "../app.component";
import { MatDialog } from "@angular/material/dialog";
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
export class CostumersComponent implements OnInit{
  @ViewChild("myButton") myButton: ElementRef;

  costumer: Costumer = new Costumer();
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  allCostumer = [];
  topValue = 200;
  mobile = false;

  constructor(private appComponent: AppComponent, public dialog: MatDialog) {
    this.setCustomerToShow();
    if (window.innerWidth < 650) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

  /**
   * This function will show the pagename
   */
  setCustomerToShow() {
    this.appComponent.costumerPage = true;
    this.appComponent.dashboardPage = false;
    this.appComponent.privacyPage = false;
    this.appComponent.imprintPage = false;
    this.appComponent.userPage = false;
  }

  /**
   * Here i take the costumer data from firestore
   */
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
          }
        });

        this.allCostumer = costumersData;
      }
    );

    if (window.innerWidth < 650) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }
  /**
   * This function is to open the dialog to add new costumer
   */
  openDialogCostumer() {
    const dialogRef = this.dialog.open(DialogaddcostumerComponent);
  }
  
  onResize(event) {
    if (window.innerWidth < 650) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }
}


