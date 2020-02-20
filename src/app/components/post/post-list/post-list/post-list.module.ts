import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from '../post-list.component';

import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule
  ],
  
  exports:[PostListComponent]
})
export class PostListModule { }
