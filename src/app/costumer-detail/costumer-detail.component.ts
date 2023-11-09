import { Component, HostListener, OnDestroy, OnInit, inject } from "@angular/core";
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
import { Costumer } from "../models/costumer.class";
import { DialogEditCostumerComponent } from "../dialog-edit-costumer/dialog-edit-costumer.component";
import { DialogEditCostumerAddressComponent } from "../dialog-edit-costumer-address/dialog-edit-costumer-address.component";
import { DialogUserDeleteComponent } from "../dialog-user-delete/dialog-user-delete.component";
import { User } from "../models/user.class";

@Component({
  selector: "app-costumer-detail",
  templateUrl: "./costumer-detail.component.html",
  styleUrls: ["./costumer-detail.component.scss"],
})
export class CostumerDetailComponent implements OnDestroy, OnInit {
  costumerId: string;
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  costumerRef;
  unsubscribe;
  costumer = new Costumer();
  loading = false;
  empty: boolean = false;
  mobile = false;
  getScreenWidth: number;

  constructor(public dialog: MatDialog, public route: ActivatedRoute) {
    this.route.paramMap.subscribe((paramMap) => {
      this.costumerId = paramMap.get("id");
      this.getUser(this.costumerId);
    });
  }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    if(this.getScreenWidth < 450) {
      this.mobile = true;
    }
  }

  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    if(this.getScreenWidth < 450) {
      this.mobile = true;
    }
  } 

  /**
   * This function will load the right costumer
   *
   * @param id number
   */
  getUser(id) {
    this.costumerRef = doc(this.db, "costumer", id);
    this.unsubscribe = onSnapshot(this.costumerRef, (docSnapshot) => {
      this.costumer = new Costumer(docSnapshot.data());
    });
    setTimeout(() => {
      this.checkIfNoticeEmpty();
    }, 1050);
  }

  /**
   * This function will open the dialog to edit the costumer data
   */
  editMenu() {
    const dialog = this.dialog.open(DialogEditCostumerComponent);
    dialog.componentInstance.costumer = new Costumer(this.costumer);
    dialog.componentInstance.costumerId = this.costumerId;
  }

  /**
   * This function will open the dialog to edit the costumer address data
   */
  editAddress() {
    const dialog = this.dialog.open(DialogEditCostumerAddressComponent);
    dialog.componentInstance.costumer = new Costumer(this.costumer);
    dialog.componentInstance.costumerId = this.costumerId;
  }

  /**
   * This function will check if the costumer has a notice to show
   */
  checkIfNoticeEmpty() {
    if (this.costumer.notice.length == 0) {
      this.empty = true;
    } else {
      this.empty = false;
    }
  }

  deleteCostumer() {
    const dialog = this.dialog.open(DialogUserDeleteComponent);
    const message = (dialog.componentInstance.costumerMessage = true);
    console.log(this.costumer);
    dialog.componentInstance.costumer = new Costumer(this.costumer);
    dialog.componentInstance.costumerId = this.costumerId;
  }

  ngOnDestroy(): void {
    /*   this.dialog.open(
      DialogUserDeleteComponent
    ).componentInstance.costumerMessage = false; */
  }
}
