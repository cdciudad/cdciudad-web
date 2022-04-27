import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './pages/description/description.component';
import { ServicesOfferComponent } from './pages/services-offer/services-offer.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesOfferComponent,
  },
  {
    path: ':id',
    component: DescriptionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceOfferRoutingModule {}
