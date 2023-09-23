import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserDetailComponent } from "./user-detail.component";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";

describe("UserDetailComponent", () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [UserDetailComponent],
    });
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
