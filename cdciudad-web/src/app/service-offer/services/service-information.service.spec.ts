import { TestBed } from '@angular/core/testing';

import { ServiceInformationService } from './service-information.service';

describe('ServiceInformationService', () => {
  let service: ServiceInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
