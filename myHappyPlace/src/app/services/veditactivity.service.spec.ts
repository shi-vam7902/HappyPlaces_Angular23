import { TestBed } from '@angular/core/testing';

import { VeditactivityService } from './veditactivity.service';

describe('VeditactivityService', () => {
  let service: VeditactivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeditactivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
