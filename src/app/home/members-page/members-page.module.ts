import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersPageComponent } from './members-page.component'
import { MembersPageRoutingModule } from './members-page-routing.module'
import { MembersDisplayBoxComponent } from './members-display-box/members-display-box.component'

@NgModule({
  declarations: [
    MembersPageComponent,
    MembersDisplayBoxComponent
  ],
  imports: [
    CommonModule,
    MembersPageRoutingModule
  ]
})
export class MembersPageModule { }
