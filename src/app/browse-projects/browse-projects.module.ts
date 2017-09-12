import { BrowseProjectsRoutingModule } from './browse-projects-routing.module';
import { BrowseProjectsComponent } from './browse-projects.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
      BrowseProjectsComponent
  ],
  imports: [
    CommonModule,
    BrowseProjectsRoutingModule
  ]
})

export default class BrowseProjectsModule { }