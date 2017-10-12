import { ParticlesModule } from 'angular-particle';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterBoxComponent } from './register-box/register-box.component';

@NgModule({
  declarations: [
      RegisterComponent,
      RegisterBoxComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ParticlesModule
  ]
})

export default class RegisterModule { }