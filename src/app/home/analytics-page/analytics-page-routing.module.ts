import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AnalyticsPageComponent }      from './analytics-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AnalyticsPageComponent
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
export class AnalyticsPageRoutingModule { }
