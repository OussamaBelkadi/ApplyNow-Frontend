import { TestBed } from '@angular/core/testing';

import { PostuleService } from './postule.service';

describe('PostuleService', () => {
  let service: PostuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
