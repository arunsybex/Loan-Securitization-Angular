import { TestBed, inject } from '@angular/core/testing';

import { ContactserviceService } from './contactservice.service';

describe('ContactserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactserviceService]
    });
  });

  it('should be created', inject([ContactserviceService], (service: ContactserviceService) => {
    expect(service).toBeTruthy();
  }));
});
