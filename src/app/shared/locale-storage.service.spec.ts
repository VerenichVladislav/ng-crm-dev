import { TestBed } from '@angular/core/testing';

import { LocaleStorageService } from './locale-storage.service';

describe('LocaleStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocaleStorageService = TestBed.get(LocaleStorageService);
    expect(service).toBeTruthy();
  });
});
