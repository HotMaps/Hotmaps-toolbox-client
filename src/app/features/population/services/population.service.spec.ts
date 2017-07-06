import { TestBed, inject } from '@angular/core/testing';

import { PopulationService } from './population.service';

describe('PopulationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopulationService]
    });
  });

  it('should be created', inject([PopulationService], (service: PopulationService) => {
    expect(service).toBeTruthy();
  }));
});
