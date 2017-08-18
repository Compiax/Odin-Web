import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { MembersPageComponent }      from './members-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MembersPageComponent
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
export class MembersPageRoutingModule { }
