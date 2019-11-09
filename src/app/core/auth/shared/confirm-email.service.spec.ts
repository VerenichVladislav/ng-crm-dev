import { TestBed } from '@angular/core/testing';

import { ConfirmEmailService } from './confirm-email.service';

describe('ConfirmEmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmEmailService = TestBed.get(ConfirmEmailService);
    expect(service).toBeTruthy();
  });
});
