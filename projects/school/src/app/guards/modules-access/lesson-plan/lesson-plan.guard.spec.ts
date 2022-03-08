import { TestBed } from '@angular/core/testing';

import { LessonPlanGuard } from './lesson-plan.guard';

describe('LessonPlanGuard', () => {
  let guard: LessonPlanGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LessonPlanGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
