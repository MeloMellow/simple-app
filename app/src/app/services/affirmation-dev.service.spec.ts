import { TestBed } from '@angular/core/testing';

import { AffirmationDevService } from './affirmation-dev.service';

describe('AffirmationDevService', () => {
  let service: AffirmationDevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffirmationDevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
