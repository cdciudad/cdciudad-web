import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchTeam } from '../../models/team';

import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-work-team',
  templateUrl: './work-team.component.html',
  styleUrls: ['./work-team.component.scss'],
})
export class WorkTeamComponent implements OnInit {
  @ViewChild('dropDown') dropDown!: ElementRef;
  @ViewChild('dropDownFocus') dropDownFocus!: ElementRef;

  teacherList: SearchTeam[] = [];
  staffList: SearchTeam[] = [];
  AllMembers: SearchTeam[] = [];
  showList: SearchTeam[] = [];

  dropDownState: boolean = false;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getAllStaff().subscribe((data) => {
      this.staffList = data;
      this.AllMembers = this.AllMembers.concat(this.staffList);
    });
    this.teamService.getAllTeacher().subscribe((data) => {
      this.teacherList = data;
      this.AllMembers = this.AllMembers.concat(this.teacherList);
      this.showList = this.AllMembers;
    });
  }

  open(): void {
    if (this.dropDownState) {
      this.dropDown.nativeElement.style.marginBottom = '30px';
      this.dropDownState = false;
    } else {
      this.dropDown.nativeElement.style.marginBottom = '180px';
      this.dropDownState = true;
    }
  }

  changeList(changeTo: string): void {
    switch (changeTo) {
      case 'teachers':
        this.showList = this.teacherList;
        break;
      case 'staff':
        this.showList = this.staffList;
        break;
      default:
        this.showList = this.AllMembers;
        break;
    }
  }
}
