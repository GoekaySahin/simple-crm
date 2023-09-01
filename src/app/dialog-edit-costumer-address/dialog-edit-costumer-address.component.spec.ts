import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditCostumerAddressComponent } from './dialog-edit-costumer-address.component';

describe('DialogEditCostumerAddressComponent', () => {
  let component: DialogEditCostumerAddressComponent;
  let fixture: ComponentFixture<DialogEditCostumerAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogEditCostumerAddressComponent]
    });
    fixture = TestBed.createComponent(DialogEditCostumerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
