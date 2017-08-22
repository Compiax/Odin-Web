import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module'
import { RegisterComponent } from './register.component';
import { RegisterBoxComponent } from './register-box/register-box.component'
import { RegisterService } from './register-box/register-box.service'
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
      RegisterComponent,
      RegisterBoxComponent
  ],
  imports: [
    CommonModule,1
    RegisterRoutingModule,
    HttpModule
  ],
  providers: [ RegisterService ]
})

export default class RegisterModule { }