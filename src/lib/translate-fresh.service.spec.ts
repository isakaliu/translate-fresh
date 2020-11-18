import { TestBed } from '@angular/core/testing';

import { TranslateFreshService } from './translate-fresh.service';

describe('TranslateFreshService', () => {
  let service: TranslateFreshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateFreshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
