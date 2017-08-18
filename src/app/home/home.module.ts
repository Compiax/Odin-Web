import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module'

import { HomeComponent } from './home.component';
import { BreadcrumbsBarComponent } from './breadcrumbs-bar/breadcrumbs-bar.component'
import { TabsBarComponent } from './tabs-bar/tabs-bar.component'
import { PhaseDisplayComponent } from './phase-display/phase-display.component';

@NgModule({
  declarations: [
      HomeComponent,
      BreadcrumbsBarComponent,
      TabsBarComponent,
      PhaseDisplayComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export default class HomeModule { }
