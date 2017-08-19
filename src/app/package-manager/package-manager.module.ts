import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageManagerRoutingModule } from './package-manager-routing.module'
import { PackageManagerComponent } from './package-manager.component';

@NgModule({
  declarations: [
      PackageManagerComponent
  ],
  imports: [
    CommonModule,
    PackageManagerRoutingModule
  ]
})

export default class PackageManagerModule { }