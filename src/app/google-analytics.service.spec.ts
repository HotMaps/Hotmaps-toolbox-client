import { TestBed, inject } from '@angular/core/testing';

import { GoogleAnalyticsService } from './google-analytics.service';

describe('GoogleAnalyticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [GoogleAnalyticsService],
    teardown: { destroyAfterEach: false }
});
  });

  it('should be created', inject([GoogleAnalyticsService], (service: GoogleAnalyticsService) => {
    expect(service).toBeTruthy();
  }));
});
