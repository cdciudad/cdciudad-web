import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-course',
  templateUrl: './pay-course.component.html',
  styleUrls: ['./pay-course.component.scss'],
})
export class PayCourseComponent implements OnInit {
  titleOne: string = 'Pagá tus';
  titleTwo: string = 'cursos';
  description: string =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum amet labore minima suscipit. Deleniti aspernatur ab expedita quis saepe dolores, nisi id cumque tempora debitis maiores voluptates non illo suscipit?';

  constructor() {}

  ngOnInit(): void {}
}
