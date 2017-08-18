import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { DocumentsPageModule } from './documents-page/documents-page.module'
import { MembersPageModule } from './members-page/members-page.module'
import { InfoPageModule } from './info-page/info-page.module'
import { SettingsPageModule } from './settings-page/settings-page.module'
import { AnalyticsPageModule } from './analytics-page/analytics-page.module'
    
import { DocumentsPageComponent } from './documents-page/documents-page.component'
import { HomeComponent }          from './home.component';
import { BreadcrumbsBarComponent } from './breadcrumbs-bar/breadcrumbs-bar.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
     children: [
      {
        path: 'documents',
        loadChildren: () => DocumentsPageModule
      },
      {
        path: 'members',
        loadChildren: () => MembersPageModule
      },
      {
        path: 'info',
        loadChildren: () => InfoPageModule
      },
      {
        path: 'settings',
        loadChildren: () => SettingsPageModule
      },
      {
        path: 'analytics',
        loadChildren: () => AnalyticsPageModule
      }
    ]
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
export class HomeRoutingModule { }