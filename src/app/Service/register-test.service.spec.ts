import { TestBed } from '@angular/core/testing';

import { RegisterTestService } from './register-test.service';

describe('RegisterTestService', () => {
  let service: RegisterTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
