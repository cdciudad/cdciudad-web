import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCourseComponent } from './pay-course.component';

describe('PayCourseComponent', () => {
  let component: PayCourseComponent;
  let fixture: ComponentFixture<PayCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
