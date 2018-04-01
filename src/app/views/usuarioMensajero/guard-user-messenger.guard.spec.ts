import { TestBed, async, inject } from '@angular/core/testing';

import { GuardUserMessengerGuard } from './guard-user-messenger.guard';

describe('GuardUserMessengerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardUserMessengerGuard]
    });
  });

  it('should ...', inject([GuardUserMessengerGuard], (guard: GuardUserMessengerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
