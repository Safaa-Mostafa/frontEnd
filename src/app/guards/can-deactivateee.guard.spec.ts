import { TestBed } from '@angular/core/testing';

import { CanDeactivateeeGuard } from './can-deactivateee.guard';

describe('CanDeactivateeeGuard', () => {
  let guard: CanDeactivateeeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateeeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
