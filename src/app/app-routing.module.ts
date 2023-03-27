import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen1Component } from './views/screen1/screen1.component';

const routes: Routes = [
  { path: 'screen1', component: Screen1Component },
  { path: '', redirectTo: 'screen1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
