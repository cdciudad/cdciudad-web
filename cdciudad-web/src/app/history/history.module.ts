import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';

import { HistoryComponent } from './pages/history/history.component';
import { CardMessageComponent } from './components/card-message/card-message.component';

@NgModule({
  declarations: [HistoryComponent, CardMessageComponent],
  imports: [CommonModule, HistoryRoutingModule],
})
export class HistoryModule {}
