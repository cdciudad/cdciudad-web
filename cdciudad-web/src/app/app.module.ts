import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './core/pages/main/main.component';
import { ServicesSelectComponent } from './service-offer/pages/services-select/services-select.component';
import { MainFooterComponent } from './shared/components/main-footer/main-footer.component';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ServicesSelectComponent,
    MainHeaderComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
