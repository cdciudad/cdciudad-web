import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VimeModule } from '@vime/angular';

import { CoursesRoutingModule } from './courses-routing.module';
import { PayEnrollmentComponent } from './pages/pay-enrollment/pay-enrollment.component';
import { PayCourseComponent } from './pages/pay-course/pay-course.component';
import { MainBannerComponent } from './components/pay/main-banner/main-banner.component';
import { VideoInformationComponent } from './components/pay/video-information/video-information.component';
import { StepsFollowComponent } from './components/pay/steps-follow/steps-follow.component';
import { CardCourseComponent } from './components/pay/card-course/card-course.component';
import { PayCourseSelectComponent } from './pages/pay-course-select/pay-course-select.component';
import { CourseSelectComponent } from './pages/course-select/course-select.component';

@NgModule({
  declarations: [
    PayEnrollmentComponent,
    PayCourseComponent,
    MainBannerComponent,
    VideoInformationComponent,
    StepsFollowComponent,
    CardCourseComponent,
    PayCourseSelectComponent,
    CourseSelectComponent,
  ],
  imports: [CommonModule, CoursesRoutingModule, VimeModule],
})
export class CoursesModule {}
