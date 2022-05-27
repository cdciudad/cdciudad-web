import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayCourseComponent } from './pages/pay-course/pay-course.component';
import { PayEnrollmentComponent } from './pages/pay-enrollment/pay-enrollment.component';

const routes: Routes = [
  {
    path: 'pago-matricula',
    component: PayEnrollmentComponent,
  },
  {
    path: 'pago-cursos',
    component: PayCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
