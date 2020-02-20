import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PostAllComponent } from './post-all/post-all.component';
import { PostEachComponent } from './post-each/post-each.component';

import { JumbotronPostPagesModule } from '../../jumbotron-post-pages/jumbotron-post-pages/jumbotron-post-pages.module';
import { POSTSRoutingModule } from './posts-routing.module';




@NgModule({
  declarations: [
    PostEachComponent,
    PostAllComponent,
  
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    RouterModule,
    JumbotronPostPagesModule,
    // POSTSRoutingModule
   
    
  ],
  exports:[
    PostEachComponent,
    PostAllComponent,
    
  ],
  
  
})
export class PostAllModule { }