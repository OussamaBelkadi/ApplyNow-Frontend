import { TestBed } from '@angular/core/testing';

import { SocieteService } from './societe.service';

describe('SocieteService', () => {
  let service: SocieteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocieteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
