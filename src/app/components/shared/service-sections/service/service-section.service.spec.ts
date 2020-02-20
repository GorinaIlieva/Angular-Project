import { TestBed } from '@angular/core/testing';

import { ServiceSectionService } from './service-section.service';

describe('ServiceSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceSectionService = TestBed.get(ServiceSectionService);
    expect(service).toBeTruthy();
  });
});
