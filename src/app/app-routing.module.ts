import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ServiceDetailsComponent } from './components/shared/serviceDetails/service-details/service-details.component';
import { ServiceSectionListComponent } from './components/shared/service-sections/service-section-list/service-section-list.component';
import { ServiceSectionListResolver } from './components/shared/service-sections/service-section-list/service-sections-listCustomerManagement.resolver';
import { ServiceSectionListCleaningResolver } from './components/shared/service-sections/service-section-list/service-section-listCleaning.resolver';
import { ServiceGuestManagementResolver } from './components/shared/service-sections/service-section-list/service-section-listGuestManagement.resolver';
import { ServicePropertyManagementResolver } from './components/shared/service-sections/service-section-list/service-section-listPropertyManagement.resolver';
import { LandingComponent } from './components/servicesLandingPage/landing/landing.component';
import { ServiceDetailsResolver } from './theCore/resolvers/serviceDetailsResolver/service-details.resolver';
import { SignUpComponent } from './components/authorization/sign-up/sign-up.component';

import { LoginComponent } from './components/authorization/login/login.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostAllComponent } from './components/post/post-all/post-all/post-all.component';
import { AllPostResolver } from './theCore/resolvers/allPostResolver/all-post-resolver.service';
import { PostDetailsComponent } from './components/post/post-details/post-details.component';
import { PostDetailsResolver } from './theCore/resolvers/postDetailsResover/post-details-resolver.service';
import { PostUserComponent } from './components/post/post-user/post-user.component';
import { PostEditComponent } from './components/post/post-edit/post-edit.component';



const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'home' },
  { path: 'home', component: LandingComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', redirectTo: 'home' },
  { path: "services/:id", component: ServiceDetailsComponent, resolve: [ServiceDetailsResolver] },
  { path: 'cm', component: ServiceSectionListComponent, resolve: [ServiceSectionListResolver] },
  { path: 'cleaning', component: ServiceSectionListComponent, resolve: [ServiceSectionListCleaningResolver] },
  { path: 'gm', component: ServiceSectionListComponent, resolve: [ServiceGuestManagementResolver] },
  { path: 'pm', component: ServiceSectionListComponent, resolve: [ServicePropertyManagementResolver] },
  { path: 'post/create', component: PostListComponent },
  { path: 'posts/all', component: PostAllComponent, resolve: [AllPostResolver] },
  { path: 'post/:id', component: PostDetailsComponent, resolve: [PostDetailsResolver] },
  { path: 'posts/user', component: PostUserComponent, resolve: [AllPostResolver] },
  { path: 'post/edit/:id', component: PostEditComponent, resolve: [PostDetailsResolver] },
  // {path: 'post', children: [
  //     { path: 'create', component: PostListComponent },
  //     { path: 'all', component: PostAllComponent, resolve: [AllPostResolver] },
  //     { path: ':id', component: PostDetailsComponent, resolve: [PostDetailsResolver] },
  //     { path: 'user', component: PostUserComponent, resolve: [AllPostResolver] },
  //     { path: 'edit/:id', component: PostEditComponent, resolve: [PostDetailsResolver] },
  //   ]}
  ]

      // { path: 'posts/all', loadChildren: () => import('./components/post/post-all/post-all.module').then(m => m.PostAllModule) }

      // { path: '**', component: PageNotFoundComponent }
    


@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
export class AppRoutingModule { }
