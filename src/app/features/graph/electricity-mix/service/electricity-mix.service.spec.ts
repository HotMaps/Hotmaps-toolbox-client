import { TestBed, inject } from '@angular/core/testing';

import { ElectricityMixService } from './electricity-mix.service';

describe('ElectricityMixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectricityMixService]
    });
  });

  it('should be created', inject([ElectricityMixService], (service: ElectricityMixService) => {
    expect(service).toBeTruthy();
  }));
});
