import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewPackageRoutingModule } from './view-package-routing.module';
import { ViewPackageComponent } from './view-package.component';
import { SearchBoxComponent } from '../search-box/search-box.component';

@NgModule({
  declarations: [
      ViewPackageComponent
  ],
  imports: [
    CommonModule,
    ViewPackageRoutingModule
  ]
})

export default class ViewPackageModule {

}