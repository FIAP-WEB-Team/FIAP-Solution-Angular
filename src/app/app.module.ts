import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { HeaderComponent } from './views/header/header.component';
import { FollowlineComponent } from './views/followline/followline.component';
import { Screen1Component } from './views/screen1/screen1.component';
import { SelectPriceScreenComponent } from './views/select-price-screen/select-price-screen.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { PassengerInputComponent } from './views/passenger-input/passenger-input.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FollowlineComponent,
    Screen1Component,

    SelectPriceScreenComponent,

    PassengerInputComponent,
    CheckoutComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatAutocompleteModule,

  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
