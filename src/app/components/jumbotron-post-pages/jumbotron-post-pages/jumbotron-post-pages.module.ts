import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronPostPagesComponent } from '../jumbotron-post-pages.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [JumbotronPostPagesComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ],
  exports: [JumbotronPostPagesComponent]
})
export class JumbotronPostPagesModule { }
