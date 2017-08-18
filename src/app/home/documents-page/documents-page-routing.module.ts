import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { DocumentsPageComponent }      from './documents-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DocumentsPageComponent
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
export class DocumentsPageRoutingModule { }
