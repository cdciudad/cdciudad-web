import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Player } from '@vime/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
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
