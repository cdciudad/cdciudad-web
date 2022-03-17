import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFooterComponent } from './core/components/main-footer/main-footer.component';
import { MainHeaderComponent } from './core/components/main-header/main-header.component';
import { SideMenuComponent } from './core/components/side-menu/side-menu.component';
import { MainComponent } from './core/pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainFooterComponent,
    MainHeaderComponent,
    SideMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
