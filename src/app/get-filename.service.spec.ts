import { TestBed, inject } from '@angular/core/testing';

import { GetFilenameService } from './get-filename.service';

describe('GetFilenameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetFilenameService]
    });
  });

  it('should be created', inject([GetFilenameService], (service: GetFilenameService) => {
    expect(service).toBeTruthy();
  }));
});
