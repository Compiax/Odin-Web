import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { PackageManagerComponent } from './package-manager.component'

const routes: Routes = [
  {
    path: '',
    component: PackageManagerComponent
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
export class PackageManagerRoutingModule { }