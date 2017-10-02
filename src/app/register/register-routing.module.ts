import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { RegisterComponent } from './register.component'

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];

@NgModule({
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RegisterRoutingModule { }
