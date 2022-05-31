import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-enrollment',
  templateUrl: './pay-enrollment.component.html',
  styleUrls: ['./pay-enrollment.component.scss'],
})
export class PayEnrollmentComponent implements OnInit {
  titleOne: string = 'Pagá tu';
  titleTwo: string = 'matrícula';
  description: string =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum amet labore minima suscipit. Deleniti aspernatur ab expedita quis saepe dolores, nisi id cumque tempora debitis maiores voluptates non illo suscipit?';

  constructor() {}

  ngOnInit(): void {}
}
