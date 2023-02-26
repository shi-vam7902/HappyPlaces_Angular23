import { TestBed } from '@angular/core/testing';

import { VeditbookingService } from './veditbooking.service';

describe('VeditbookingService', () => {
  let service: VeditbookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeditbookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
