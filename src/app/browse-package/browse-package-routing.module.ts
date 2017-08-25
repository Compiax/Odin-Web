import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { BrowsePackageComponent } from './browse-package.component'

const routes: Routes = [
  {
    path: '',
    component: BrowsePackageComponent
  }
];

@NgModule({
  exports: [
    RouterModule  
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class BrowsePackageRoutingModule { }