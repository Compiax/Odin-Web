import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageManagerRoutingModule } from './package-manager-routing.module'
import { PackageManagerComponent } from './package-manager.component';
import { PackageManagerBoxComponent } from './package-manager-box/package-manager-box.component'

@NgModule({
  declarations: [
      PackageManagerComponent,
      PackageManagerBoxComponent
  ],
  imports: [
    CommonModule,
    PackageManagerRoutingModule
  ]
})

export default class PackageManagerModule { }