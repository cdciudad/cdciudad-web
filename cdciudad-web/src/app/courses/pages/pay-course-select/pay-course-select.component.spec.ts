import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCourseSelectComponent } from './pay-course-select.component';

describe('PayCourseSelectComponent', () => {
  let component: PayCourseSelectComponent;
  let fixture: ComponentFixture<PayCourseSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayCourseSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCourseSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
