import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from '../landing.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { JumbotronLandingPageModule } from 'src/app/components/jumbotron-landing-page/jumbotron-landing-page/jumbotron-landing-page.module';
import { ServiceLandingModule } from '../../service-landing/service-landing.module';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    JumbotronLandingPageModule,
    ServiceLandingModule
  ],
  exports:[
    LandingComponent
  ]
})
export class LandingModule { }
