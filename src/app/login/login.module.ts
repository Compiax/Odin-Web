import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './login.component';
import { LoginBoxComponent } from './login-box/login-box.component'

@NgModule({
  declarations: [
      LoginComponent,
      LoginBoxComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export default class LoginModule { }
