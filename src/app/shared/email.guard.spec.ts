import { TestBed, async, inject } from '@angular/core/testing';

import { EmailGuard } from './email.guard';

describe('EmailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailGuard]
    });
  });

  it('should ...', inject([EmailGuard], (guard: EmailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
