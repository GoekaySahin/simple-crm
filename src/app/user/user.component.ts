import { Component, HostListener, OnInit, inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogAddUserComponent } from "../dialog-add-user/dialog-add-user.component";
import { User } from "../models/user.class";
import { Observable, debounceTime, fromEvent } from "rxjs";
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
export class UserComponent implements OnInit {
  user: User = new User();
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  allUsers = [];
  mobile:boolean = false;
  getScreenWidth: number;

  constructor(public dialog: MatDialog, private appComponent: AppComponent) {
    this.setUserdToShow();

  }


  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    if(this.getScreenWidth < 450) {
      this.mobile = true;
    }
  } 

  

  /**
   * This function will show the pagename
   */
  setUserdToShow() {
    this.appComponent.dashboardPage = false;
    this.appComponent.privacyPage = false;
    this.appComponent.imprintPage = false;
    this.appComponent.costumerPage = false;
    this.appComponent.userPage = true;
  }

  /**
   * Here i load the data from the user from firebase
   */
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
    this.getScreenWidth = window.innerWidth;
    if(this.getScreenWidth < 450) {
      this.mobile = true;
    }
  }

  /**
   * To open the dialog to add a new user
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent);
  }
}


