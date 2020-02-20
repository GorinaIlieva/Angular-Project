import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditComponent } from './post-edit.component';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PostEditComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    PostEditComponent
  ]
})
export class PostEditModule { }
