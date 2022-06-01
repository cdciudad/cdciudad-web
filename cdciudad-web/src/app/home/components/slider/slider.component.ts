import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchTeam } from 'src/app/work-team/models/team';

import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  teacherList: SearchTeam[] = [];

  constructor(private router: Router, private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService
      .getRandomTeachers()
      .subscribe((data) => (this.teacherList = data));
  }

  goToTeachersView(isValid: boolean, id: string) {
    if (isValid) {
      this.router.navigate([`./equipo/teacher/${id}`]);
    }
  }
}
