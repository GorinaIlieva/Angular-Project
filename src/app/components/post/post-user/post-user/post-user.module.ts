import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostUserComponent } from '../post-user.component';
import { JumbotronPostPagesModule } from 'src/app/components/jumbotron-post-pages/jumbotron-post-pages/jumbotron-post-pages.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PostAllModule } from '../../post-all/post-all.module';



@NgModule({
  declarations: [PostUserComponent],
  imports: [
    CommonModule,
    PostAllModule,
    JumbotronPostPagesModule,
    MDBBootstrapModule,
   

  ],
  exports: [PostUserComponent]
})
export class PostUserModule { }
