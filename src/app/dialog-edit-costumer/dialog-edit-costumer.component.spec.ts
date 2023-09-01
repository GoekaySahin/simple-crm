import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditCostumerComponent } from './dialog-edit-costumer.component';

describe('DialogEditCostumerComponent', () => {
  let component: DialogEditCostumerComponent;
  let fixture: ComponentFixture<DialogEditCostumerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogEditCostumerComponent]
    });
    fixture = TestBed.createComponent(DialogEditCostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
