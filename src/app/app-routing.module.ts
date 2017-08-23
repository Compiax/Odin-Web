import { IsAuthenticatedGuard } from './_services/isAuthenticatedGuard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignspacePageComponent } from './pages/designspace-page/designspace-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module'
  },
  {
    path: 'register',
    loadChildren: 'app/register/register.module'
  },
  {
    path: 'packages',
    loadChildren: 'app/pages/packages/packages-page.module',
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'designSpace',
    component: DesignspacePageComponent
  },
  { 
    path: 'view-package',
    loadChildren: 'app/view-package/view-package.module',
    canActivate: [IsAuthenticatedGuard]
  },
/*  {
    path: 'documentation'
    component: DesignspacePageComponent
  },
  {
    path: 'profile'
    component: DesignspacePageComponent
  },
  {
    path: 'designSpace'
    component: DesignspacePageComponent
  },*/
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }