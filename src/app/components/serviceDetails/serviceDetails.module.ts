import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [ServiceDetailsComponent],
  
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule
  ],
  

  exports:[
    ServiceDetailsComponent
  ]
})
export class ServiceDetailsModule { }
