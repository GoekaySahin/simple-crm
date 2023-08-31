import { TestBed } from '@angular/core/testing';

import { CostumerDataService } from './costumer-data.service';

describe('CostumerDataService', () => {
  let service: CostumerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostumerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
