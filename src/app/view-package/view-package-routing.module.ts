import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { ViewPackageComponent } from './view-package.component'

const routes: Routes = [
  {
    path: '',
    component: ViewPackageComponent
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
export class ViewPackageRoutingModule { }