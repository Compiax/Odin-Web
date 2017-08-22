import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewPackageRoutingModule } from './view-package-routing.module';
import { ViewPackageComponent } from './view-package.component';
import { VPAboutComponent } from './vp-about/vp-about.component';
import { VPUsageComponent } from './vp-usage/vp-usage.component';
import { VPTestComponent } from './vp-test/vp-test.component';


@NgModule({
  declarations: [
      ViewPackageComponent,
      VPAboutComponent,
      VPUsageComponent,
      VPTestComponent
  ],
  imports: [
    CommonModule,
    ViewPackageRoutingModule
  ]
})

export default class ViewPackageModule { 

}