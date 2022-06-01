import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../models/team';

import { TeamService } from '../../services/team.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @ViewChild('slides_container') displace!: ElementRef;
  personId: string | null = '';
  staff_type: string | null = '';
  person!: Person;

  constructor(
    private teamService: TeamService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          this.personId = params.get('id');
          this.staff_type = params.get('staff_type');
          if (this.personId && this.staff_type === 'teacher') {
            return this.teamService.getTeacher(this.personId);
          }
          if (this.personId && this.staff_type === 'staff') {
            return this.teamService.getStaff(this.personId);
          }
          return [];
        })
      )
      .subscribe((data) => (this.person = data));
  }

  scrollLeftTo(): void {
    this.displace.nativeElement.scrollBy(-2, 0);
  }

  scrollRightTo(): void {
    this.displace.nativeElement.scrollBy(10, 0);
  }
}
