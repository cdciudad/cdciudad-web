import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkTeamRoutingModule } from './work-team-routing.module';
import { WorkTeamComponent } from './pages/work-team/work-team.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ArrayToStringPipe } from './pipes/array-to-string.pipe';
import { OnlyNamePipe } from './pipes/only-name.pipe';


@NgModule({
  declarations: [
    WorkTeamComponent,
    ProfileComponent,
    ArrayToStringPipe,
    OnlyNamePipe
  ],
  imports: [
    CommonModule,
    WorkTeamRoutingModule
  ]
})
export class WorkTeamModule { }
