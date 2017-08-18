import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { InfoPageComponent }      from './info-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InfoPageComponent
  },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class InfoPageRoutingModule { }
