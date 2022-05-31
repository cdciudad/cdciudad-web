import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  @ViewChild('checkBox') menuState!: ElementRef;
  coursesMenu: boolean = false;

  constructor() {}

  closed(): void {
    this.menuState.nativeElement.checked = false;
    this.coursesMenu = false;
  }

  showCoursesMenu(): void {
    this.coursesMenu = !this.coursesMenu;
  }
}
