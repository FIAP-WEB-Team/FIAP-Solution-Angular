import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './views/header/header.component';
import { FollowlineComponent } from './views/followline/followline.component';
import { Screen1Component } from './views/screen1/screen1.component';
import { SelectPriceScreenComponent } from './views/select-price-screen/select-price-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FollowlineComponent,
    Screen1Component,
    SelectPriceScreenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
