import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalitiesPageComponent } from './legalities-page.component';

describe('LegalitiesPageComponent', () => {
  let component: LegalitiesPageComponent;
  let fixture: ComponentFixture<LegalitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalitiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
