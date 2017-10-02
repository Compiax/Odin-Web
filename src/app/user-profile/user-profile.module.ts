import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { UserProfileRoutingModule } from './user-profile-routing.module'
import { UserProfileComponent } from './user-profile.component';
//binimport { UserProfileBoxComponent } from './user-profile-box/user-profile-box.component'

@NgModule({
  declarations: [
      UserProfileComponent
      //UserProfileBoxComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    FormsModule
  ]
})

export default class UserProfileModule { }