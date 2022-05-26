import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VimeModule } from '@vime/angular';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { SliderComponent } from './components/slider/slider.component';
import { HistoryComponent } from './components/history/history.component';
import { CardMessageComponent } from './components/card-message/card-message.component';
import { CardHistoryComponent } from './components/card-history/card-history.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';

@NgModule({
  declarations: [MainComponent, SliderComponent, HistoryComponent, CardMessageComponent, CardHistoryComponent, MainBannerComponent],
  imports: [CommonModule, HomeRoutingModule, VimeModule],
})
export class HomeModule {}
