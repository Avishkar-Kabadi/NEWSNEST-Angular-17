import { TestBed } from '@angular/core/testing';

import { BwService } from './bw.service';

describe('BwService', () => {
  let service: BwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
