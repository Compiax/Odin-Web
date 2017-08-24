import { BrowsePackageComponent } from './browse-package.component';
import { BrowsePackageRoutingModule } from './browse-package-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
      BrowsePackageComponent
  ],
  imports: [
    CommonModule,
    BrowsePackageRoutingModule
  ]
})

export default class BrowsePackageModule { 

}