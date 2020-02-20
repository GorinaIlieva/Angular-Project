import { TestBed } from '@angular/core/testing';

import { KinveyInterceptorService } from './kinvey-interceptor.service';

describe('KinveyInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KinveyInterceptorService = TestBed.get(KinveyInterceptorService);
    expect(service).toBeTruthy();
  });
});
