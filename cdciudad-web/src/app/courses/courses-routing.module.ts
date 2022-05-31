import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSelectComponent } from './pages/course-select/course-select.component';
import { PayCourseSelectComponent } from './pages/pay-course-select/pay-course-select.component';
import { PayCourseComponent } from './pages/pay-course/pay-course.component';
import { PayEnrollmentComponent } from './pages/pay-enrollment/pay-enrollment.component';

const routes: Routes = [
  {
    path: 'matricula',
    component: PayEnrollmentComponent,
  },
  {
    path: 'pago',
    component: CourseSelectComponent,
    children: [
      {
        path: '',
        component: PayCourseSelectComponent,
      },
      {
        path: ':id',
        component: PayCourseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
