import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { Error404Component } from './error-404.component';
import { Error404RoutingModule } from './error-404-routing.module';

@NgModule({
  declarations: [
      Error404Component
  ],
  imports: [
    CommonModule,
    Error404RoutingModule,
    FormsModule
  ]
})

export default class Error404Module { }