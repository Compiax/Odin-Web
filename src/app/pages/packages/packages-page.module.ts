import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesPageRoutingModule } from './packages-page-routing.module'
import { PackagesPageComponent } from './packages-page.component';

@NgModule({
  declarations: [
    PackagesPageComponent,
  ],
  imports: [
    CommonModule,
    PackagesPageRoutingModule
  ]
})

export default class RegisterModule { }