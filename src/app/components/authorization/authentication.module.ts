import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [ LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    FormsModule
  ],
  exports: [LoginComponent, SignUpComponent]
})
export class AuthorizationModule { }
