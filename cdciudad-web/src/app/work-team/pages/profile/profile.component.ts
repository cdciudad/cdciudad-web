import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @ViewChild('slides_container') displace!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  scrollLeftTo(): void {
    this.displace.nativeElement.scrollBy(-2, 0);
  }

  scrollRightTo(): void {
    this.displace.nativeElement.scrollBy(10, 0);
  }
}
