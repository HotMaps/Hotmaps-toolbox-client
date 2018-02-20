import { TestBed, inject } from '@angular/core/testing';

import { DurationCurveService } from './duration-curve.service';

describe('DurationCurveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DurationCurveService]
    });
  });

  it('should be created', inject([DurationCurveService], (service: DurationCurveService) => {
    expect(service).toBeTruthy();
  }));
});
