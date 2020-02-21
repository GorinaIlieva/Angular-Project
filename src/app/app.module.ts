
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { KinveyModule } from 'kinvey-angular-sdk'

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';


import { AuthorizationModule } from './components/authorization/authentication.module';
import { ToastrModule } from 'ngx-toastr'


import { FooterComponent } from './components/shared/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PostListModule } from './components/post/post-list/post-list/post-list.module';

import { KinveyInterceptorService } from './theCore/interceptors/kinvey-interceptor/kinvey-interceptor.service';

import { PostDetailsModule } from './components/post/post-details/post-details/post-details.module';

import { PostEditModule } from './components/post/post-edit/post-edit.module';
import { ResponseHandlerInterceptorService } from './theCore/interceptors/response-handler-interceptor/response-handler-interceptor.service';


import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { PostUserModule } from './components/post/post-user/post-user/post-user.module';
import { LandingModule } from './components/servicesLandingPage/landing/landing/landing.module';
import { POSTSRoutingModule } from './components/post/post-all/posts-routing.module';
import { PostAllModule } from './components/post/post-all/post-all.module';
import { ServiceSectionsModule } from './components/service-sections/service-sections.module';
import { ServiceDetailsModule } from './components/serviceDetails/serviceDetails.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    
    
    // PageNotFoundComponent,


  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
       LandingModule,
    
    ServiceSectionsModule,
    ServiceDetailsModule,
    KinveyModule.init({
      appKey: 'kid_SyEqVU_GL',
      appSecret: '7ce474c44b0c4a928deb8e1eacaf213b'
    }),
    AuthorizationModule,
    ToastrModule.forRoot(),
    PostListModule,
    
    PostDetailsModule,
    PostEditModule,
    PostUserModule,
    // POSTSRoutingModule,
    
   
    
    
    


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: KinveyInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
