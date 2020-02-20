import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneServiceComponent } from '../one-service/one-service.component';
import { ServiceListComponent } from '../service-list/service-list.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {  RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    OneServiceComponent,
    ServiceListComponent,
  
],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    RouterModule
   

  ], 
  exports:[
    OneServiceComponent,
    ServiceListComponent,
   
  ]
})
export class ServiceLandingModule { }
