import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayEnrollmentComponent } from './pay-enrollment.component';

describe('PayEnrollmentComponent', () => {
  let component: PayEnrollmentComponent;
  let fixture: ComponentFixture<PayEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayEnrollmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
