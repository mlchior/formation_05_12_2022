import { TestBed } from '@angular/core/testing';

import { IsEditingGuard } from './is-editing.guard';

describe('IsEditingGuard', () => {
  let guard: IsEditingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsEditingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
