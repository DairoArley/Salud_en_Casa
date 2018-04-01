import { TestBed, async, inject } from '@angular/core/testing';

import { ClientGuardGuard } from './client-guard.guard';

describe('ClientGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientGuardGuard]
    });
  });

  it('should ...', inject([ClientGuardGuard], (guard: ClientGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
