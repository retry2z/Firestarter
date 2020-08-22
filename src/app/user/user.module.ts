import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';

import { SharedModule } from '../shared/shared.module';
import { GoogleSigninDirective } from './google-signin.directive';
import { EmailLoginComponent } from './email-password/email-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilePageComponent } from './profile-page/profile-page.component';


@NgModule({
  declarations: [LoginPageComponent, GoogleSigninDirective, EmailLoginComponent, ProfilePageComponent],
  imports: [
    CommonModule,
    UserRoutingModule,    
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
