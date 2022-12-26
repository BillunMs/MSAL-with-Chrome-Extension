import { TestBed } from '@angular/core/testing';

import { MsEmailService } from './ms-email.service';

describe('MsEmailService', () => {
  let service: MsEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
