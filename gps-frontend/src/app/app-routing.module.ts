import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GpsManagementComponent } from './gps-management/gps-management.component';

const routes: Routes = [
  { path: 'gps-management', component: GpsManagementComponent }
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [GpsManagementComponent]
})
export class AppRoutingModule { }
