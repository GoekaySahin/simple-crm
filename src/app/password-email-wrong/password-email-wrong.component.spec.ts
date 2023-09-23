import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PasswordEmailWrongComponent } from "./password-email-wrong.component";
import { MatDialog } from "@angular/material/dialog";

describe("PasswordEmailWrongComponent", () => {
  let component: PasswordEmailWrongComponent;
  let fixture: ComponentFixture<PasswordEmailWrongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialog],
      declarations: [PasswordEmailWrongComponent],
    });
    fixture = TestBed.createComponent(PasswordEmailWrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
