import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogEditCostumerAddressComponent } from "./dialog-edit-costumer-address.component";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";

describe("DialogEditCostumerAddressComponent", () => {
  let component: DialogEditCostumerAddressComponent;
  let fixture: ComponentFixture<DialogEditCostumerAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [DialogEditCostumerAddressComponent],
    });
    fixture = TestBed.createComponent(DialogEditCostumerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
