import { TestBed } from '@angular/core/testing';

import { BlockingGuard } from './blocking.guard';

describe('BlockingGuard', () => {
  let guard: BlockingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BlockingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
