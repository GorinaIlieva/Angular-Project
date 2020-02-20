import { TestBed } from '@angular/core/testing';

import { AllPostResolverService } from './all-post-resolver.service';

describe('AllPostResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllPostResolverService = TestBed.get(AllPostResolverService);
    expect(service).toBeTruthy();
  });
});
