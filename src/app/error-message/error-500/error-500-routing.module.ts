import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { Error500Component } from './error-500.component';

const routes: Routes = [
  {
    path: '',
    component: Error500Component
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
export class Error500RoutingModule { }
