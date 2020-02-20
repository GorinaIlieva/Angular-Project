import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronLandingPageComponent } from '../jumbotron-landing-page.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [JumbotronLandingPageComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ],
  exports:[JumbotronLandingPageComponent]
})
export class JumbotronLandingPageModule { }
