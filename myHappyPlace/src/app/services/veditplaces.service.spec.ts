import { TestBed } from '@angular/core/testing';

import { VeditplacesService } from './veditplaces.service';

describe('VeditplacesService', () => {
  let service: VeditplacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeditplacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
