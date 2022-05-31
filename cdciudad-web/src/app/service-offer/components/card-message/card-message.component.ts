import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-message',
  templateUrl: './card-message.component.html',
  styleUrls: ['./card-message.component.scss'],
})
export class CardMessageComponent implements OnInit {
  link: string =
    'https://www.thinglink.com/scene/1447325098666098690?buttonSource=viewLimits';

  constructor() {}

  ngOnInit(): void {}
}
