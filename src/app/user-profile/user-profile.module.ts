import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { ProfileBoxComponent } from './profile-box/profile-box.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { StatsBoxComponent } from './stats-box/stats-box.component';
import { ProjectBoxComponent } from './projects-box/projects-box.component';

@NgModule({
  declarations: [
      UserProfileComponent,
      ProfileBoxComponent,
      InfoBoxComponent,
      StatsBoxComponent,
      ProjectBoxComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    FormsModule
  ]
})

export default class UserProfileModule { }