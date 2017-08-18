import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsPageComponent } from './documents-page.component';
import { DocumentsPageRoutingModule } from './documents-page-routing.module'
import { DocumentDisplayBoxComponent } from './document-display-box/document-display-box.component'

@NgModule({
  declarations: [
      DocumentsPageComponent,
      DocumentDisplayBoxComponent
  ],
  imports: [
    CommonModule,
    DocumentsPageRoutingModule
  ]
})
export class DocumentsPageModule { }