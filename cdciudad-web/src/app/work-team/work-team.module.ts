import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkTeamRoutingModule } from './work-team-routing.module';
import { WorkTeamComponent } from './pages/work-team/work-team.component';


@NgModule({
  declarations: [
    WorkTeamComponent
  ],
  imports: [
    CommonModule,
    WorkTeamRoutingModule
  ]
})
export class WorkTeamModule { }
