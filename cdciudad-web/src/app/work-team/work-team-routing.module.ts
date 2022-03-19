import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkTeamComponent } from './pages/work-team/work-team.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: WorkTeamComponent,
  },
  {
    path: ':id',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkTeamRoutingModule {}
