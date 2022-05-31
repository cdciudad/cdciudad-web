import { Component } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent {
  deepMenu: boolean = false;

  constructor() {}

  showDeepMenu(): void {
    this.deepMenu = !this.deepMenu;
  }
}
