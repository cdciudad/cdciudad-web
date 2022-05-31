import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'cursos',
        loadChildren: () =>
          import('./courses/courses.module').then((m) => m.CoursesModule),
      },
      {
        path: 'servicios',
        loadChildren: () =>
          import('./service-offer/service-offer.module').then(
            (m) => m.ServiceOfferModule
          ),
      },
      {
        path: 'equipo',
        loadChildren: () =>
          import('./work-team/work-team.module').then((m) => m.WorkTeamModule),
      },
      {
        path: 'historia',
        loadChildren: () =>
          import('./history/history.module').then((m) => m.HistoryModule),
      },
      {
        path: 'preguntas',
        loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
