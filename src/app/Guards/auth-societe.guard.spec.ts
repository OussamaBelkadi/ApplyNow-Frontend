import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authSocieteGuard } from './auth-societe.guard';

describe('authSocieteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authSocieteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
