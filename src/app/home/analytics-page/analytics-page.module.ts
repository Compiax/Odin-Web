import { NgModule } from '@angular/core';
import { AnalyticsPageRoutingModule } from './analytics-page-routing.module'
import { AnalyticsPageComponent } from './analytics-page.component';
import { AnalyticGraphCardComponent } from './analytic-graph-card/analytic-graph-card.component'

@NgModule({
  declarations: [
    AnalyticsPageComponent,
    AnalyticGraphCardComponent
  ],
  imports: [
    AnalyticsPageRoutingModule,
  ],
})
export class AnalyticsPageModule { }
