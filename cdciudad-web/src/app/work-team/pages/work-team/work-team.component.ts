import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-work-team',
  templateUrl: './work-team.component.html',
  styleUrls: ['./work-team.component.scss'],
})
export class WorkTeamComponent implements OnInit {
  @ViewChild('dropDown') dropDown!: ElementRef;
  @ViewChild('dropDownFocus') dropDownFocus!: ElementRef;

  dropDownState: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  open() {
    if (this.dropDownState) {
      this.dropDown.nativeElement.style.marginBottom = '30px';
      this.dropDownState = false;
    } else {
      this.dropDown.nativeElement.style.marginBottom = '180px';
      this.dropDownState = true;
    }
  }
}
