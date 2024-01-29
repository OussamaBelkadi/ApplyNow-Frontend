import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginSocieteGuard } from './login-societe.guard';

describe('loginSocieteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginSocieteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
