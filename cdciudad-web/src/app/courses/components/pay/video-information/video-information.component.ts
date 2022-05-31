import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Player } from '@vime/angular';

@Component({
  selector: 'app-video-information',
  templateUrl: './video-information.component.html',
  styleUrls: ['./video-information.component.scss']
})
export class VideoInformationComponent implements OnInit {

  @ViewChild('player') player!: Player;
  @ViewChild('display_button') divElementRef!: ElementRef;
  divElement!: HTMLElement;

  paused: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  playVideo() {
    this.paused = !this.paused;
  }

}
