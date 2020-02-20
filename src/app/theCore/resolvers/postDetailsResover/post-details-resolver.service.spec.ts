import { TestBed } from '@angular/core/testing';

import { PostDetailsResolverService } from '../post-details-resolver.service';

describe('PostDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostDetailsResolverService = TestBed.get(PostDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
