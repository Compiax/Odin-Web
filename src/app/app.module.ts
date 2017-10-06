import { SessionService } from './_services/session.service';
import { ProjectsService } from './_services/projects.service';
import { ComponentsService } from './_services/components.service';
import { NgIf } from '@angular/common';
import { IsAuthenticatedGuard } from './_services/guards/isAuthenticatedGuard.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { DesignspacePageComponent } from './pages/designspace-page/designspace-page.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DesignspacePageComponent
    ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpModule,
    ToastModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService, IsAuthenticatedGuard, ComponentsService, ProjectsService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
