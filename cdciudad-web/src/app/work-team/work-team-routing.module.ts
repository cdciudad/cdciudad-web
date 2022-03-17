import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkTeamComponent } from './pages/work-team/work-team.component';

const routes: Routes = [
  {
    path: '',
    component: WorkTeamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkTeamRoutingModule {}
