import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticGraphCardComponent } from './analytic-graph-card.component';

describe('AnalyticGraphCardComponent', () => {
  let component: AnalyticGraphCardComponent;
  let fixture: ComponentFixture<AnalyticGraphCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticGraphCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticGraphCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
