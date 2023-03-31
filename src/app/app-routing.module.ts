import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Screen1Component } from './views/screen1/screen1.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PassengerInputComponent } from './passenger-input/passenger-input.component';

const routes: Routes = [
  { path: 'screen1', component: Screen1Component },
  { path: '', redirectTo: 'screen1', pathMatch: 'full' },
  { path: 'passenger', component: PassengerInputComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
