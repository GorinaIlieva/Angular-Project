import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PostAllComponent } from './post-all/post-all.component';
import { AllPostResolver } from 'src/app/theCore/resolvers/allPostResolver/all-post-resolver.service';

const routes: Routes = [
  
  { path: 'posts/all', component: PostAllComponent, resolve: [AllPostResolver] },
];
console.log('BAm')

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class POSTSRoutingModule { }
