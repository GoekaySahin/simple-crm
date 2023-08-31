import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogaddcostumerComponent } from './dialogaddcostumer.component';

describe('DialogaddcostumerComponent', () => {
  let component: DialogaddcostumerComponent;
  let fixture: ComponentFixture<DialogaddcostumerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogaddcostumerComponent]
    });
    fixture = TestBed.createComponent(DialogaddcostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
