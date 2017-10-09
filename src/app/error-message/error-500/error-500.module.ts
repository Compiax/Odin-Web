import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { Error500Component } from './error-500.component';
import { Error500RoutingModule } from './error-500-routing.module';
import { ErrorBoxComponent } from '../error-box/error-box.component';

@NgModule({
  declarations: [
    Error500Component,
    ErrorBoxComponent
  ],
  imports: [
    CommonModule,
    Error500RoutingModule,
    FormsModule
  ]
})

export default class Error500Module { }