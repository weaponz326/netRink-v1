import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPlanPageComponent } from './lesson-plan-page.component';

describe('LessonPlanPageComponent', () => {
  let component: LessonPlanPageComponent;
  let fixture: ComponentFixture<LessonPlanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonPlanPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
