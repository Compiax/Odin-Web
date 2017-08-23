import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { PackagesPageComponent } from './packages-page.component'

const routes: Routes = [
  {
    path: '',
    component: PackagesPageComponent
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
export class PackagesPageRoutingModule { }
