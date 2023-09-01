import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerDetailComponent } from './costumer-detail.component';

describe('CostumerDetailComponent', () => {
  let component: CostumerDetailComponent;
  let fixture: ComponentFixture<CostumerDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostumerDetailComponent]
    });
    fixture = TestBed.createComponent(CostumerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
