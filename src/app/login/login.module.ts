import { ParticlesModule } from 'angular-particle';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ParticlesModule
  ]
})
export default class LoginModule { }
