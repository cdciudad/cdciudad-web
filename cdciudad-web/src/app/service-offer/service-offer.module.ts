import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceOfferRoutingModule } from './service-offer-routing.module';
import { ServicesOfferComponent } from './pages/services-offer/services-offer.component';
import { DescriptionComponent } from './pages/description/description.component';
import { CardMessageComponent } from './components/card-message/card-message.component';


@NgModule({
  declarations: [
    ServicesOfferComponent,
    DescriptionComponent,
    CardMessageComponent
  ],
  imports: [
    CommonModule,
    ServiceOfferRoutingModule
  ]
})
export class ServiceOfferModule { }
