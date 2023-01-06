import { TestBed } from '@angular/core/testing';

import { BillunService } from './billun.service';

describe('BillunService', () => {
  let service: BillunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
