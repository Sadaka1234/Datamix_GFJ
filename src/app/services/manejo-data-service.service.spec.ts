import { TestBed, inject } from '@angular/core/testing';

import { ManejoDataServiceService } from './manejo-data-service.service';

describe('ManejoDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManejoDataServiceService]
    });
  });

  it('should be created', inject([ManejoDataServiceService], (service: ManejoDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
