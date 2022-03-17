import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'historia',
        loadChildren: () =>
          import('./history/history.module').then((m) => m.HistoryModule),
      },
      {
        path: 'equipo',
        loadChildren: () =>
          import('./work-team/work-team.module').then((m) => m.WorkTeamModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
