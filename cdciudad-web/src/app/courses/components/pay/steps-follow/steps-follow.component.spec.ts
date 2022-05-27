import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsFollowComponent } from './steps-follow.component';

describe('StepsFollowComponent', () => {
  let component: StepsFollowComponent;
  let fixture: ComponentFixture<StepsFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsFollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
