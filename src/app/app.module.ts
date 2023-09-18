import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Mycomponent } from './Mycomponent';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    Mycomponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, Mycomponent, HomeComponent]
})
export class AppModule { }
