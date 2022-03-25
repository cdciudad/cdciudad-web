import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkTeamRoutingModule } from './work-team-routing.module';
import { WorkTeamComponent } from './pages/work-team/work-team.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    WorkTeamComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    WorkTeamRoutingModule
  ]
})
export class WorkTeamModule { }
