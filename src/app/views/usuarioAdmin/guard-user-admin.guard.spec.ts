import { TestBed, async, inject } from '@angular/core/testing';

import { GuardUserAdminGuard } from './guard-user-admin.guard';

describe('GuardUserAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardUserAdminGuard]
    });
  });

  it('should ...', inject([GuardUserAdminGuard], (guard: GuardUserAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
