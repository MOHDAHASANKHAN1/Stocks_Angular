import { TestBed } from '@angular/core/testing';

import { DerivativeIndexService } from './derivative-index.service';

describe('DerivativeIndexService', () => {
  let service: DerivativeIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DerivativeIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
