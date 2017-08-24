import { NgIf } from '@angular/common';
import { IsAuthenticatedGuard } from './_services/guards/isAuthenticatedGuard.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { DesignspacePageComponent } from './pages/designspace-page/designspace-page.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
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
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [AuthService, IsAuthenticatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
