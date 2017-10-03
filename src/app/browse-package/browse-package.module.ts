import { BrowsePackageComponent } from './browse-package.component';
import { BrowsePackageRoutingModule } from './browse-package-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchBoxComponent } from '../search-box/search-box.component';

@NgModule({
  declarations: [
      BrowsePackageComponent,
      SearchBoxComponent
  ],
  imports: [
    CommonModule,
    BrowsePackageRoutingModule
  ]
})

export default class BrowsePackageModule { 

}