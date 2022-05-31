import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoInformationComponent } from './video-information.component';

describe('VideoInformationComponent', () => {
  let component: VideoInformationComponent;
  let fixture: ComponentFixture<VideoInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
