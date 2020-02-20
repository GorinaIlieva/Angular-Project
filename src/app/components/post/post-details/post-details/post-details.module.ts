import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from '../post-details.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PostDetailsComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    RouterModule
  ],
  exports:[
    PostDetailsComponent
  ]
})
export class PostDetailsModule{ }
