<<<<<<< HEAD
import { IsAuthenticatedGuard } from './_services/isAuthenticatedGuard.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from './common/common.module';
import { DesignspacePageComponent } from './pages/designspace-page/designspace-page.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AuthService } from './_services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    DesignspacePageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [AuthService, IsAuthenticatedGuard],
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
>>>>>>> 98b0f263b7699bb4e8f02d690f5e64545cc608c7
  bootstrap: [AppComponent]
})
export class AppModule { }
