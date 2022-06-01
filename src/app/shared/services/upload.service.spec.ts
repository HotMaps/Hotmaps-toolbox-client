import { TestBed, inject } from '@angular/core/testing';

import { UploadService } from './upload.service';

describe('UploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [
        { provide: UploadService, useValue: UploadService }
    ],
    teardown: { destroyAfterEach: false }
});
  });

  it('should be created', inject([UploadService], (service: UploadService) => {
    expect(service).toBeTruthy();
  }));
});
