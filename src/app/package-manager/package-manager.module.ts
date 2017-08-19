import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageManagerRoutingModule } from './package-manager-routing.module'
import { PackageManagerComponent } from './package-manager.component';
import { ViewPackageComponent } from './view-package/view-package.component'

@NgModule({
  declarations: [
      PackageManagerComponent,
      ViewPackageComponent
  ],
  imports: [
    CommonModule,
    PackageManagerRoutingModule
  ]
})

export default class PackageManagerModule { }