import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceSectionListComponent } from './service-section-list/service-section-list.component';
import { ServiceEachSectionComponent } from './service-each-section/service-each-section.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { JumbotronPostPagesModule } from '../jumbotron-post-pages/jumbotron-post-pages/jumbotron-post-pages.module';




@NgModule({
  declarations: [
    ServiceSectionListComponent,
    ServiceEachSectionComponent
  ],

  imports: [
    CommonModule,
    MDBBootstrapModule,
    RouterModule,
    JumbotronPostPagesModule
  ],
 

  exports:[
    ServiceSectionListComponent,
    ServiceEachSectionComponent
  ]
})
export class ServiceSectionsModule { }
