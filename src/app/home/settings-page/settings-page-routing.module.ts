import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { SettingsPageComponent }      from './settings-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SettingsPageComponent
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

export class SettingsPageRoutingModule { }
