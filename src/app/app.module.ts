import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from './common/common.module';
import { DesignspacePageComponent }   from './pages/designspace-page/designspace-page.component';


@NgModule({
  declarations: [
    AppComponent,
    DesignspacePageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
