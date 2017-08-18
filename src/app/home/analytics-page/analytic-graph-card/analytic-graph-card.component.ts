import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-analytic-graph-card',
  templateUrl: './analytic-graph-card.component.html',
  styleUrls: ['./analytic-graph-card.component.scss']
})
export class AnalyticGraphCardComponent {
    @Input() card_title: string = "Empty Title";
}
