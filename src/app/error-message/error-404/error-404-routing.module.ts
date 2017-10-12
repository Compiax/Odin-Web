import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { Error404Component } from './error-404.component';

const routes: Routes = [
  {
    path: '',
    component: Error404Component
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
export class Error404RoutingModule { }
