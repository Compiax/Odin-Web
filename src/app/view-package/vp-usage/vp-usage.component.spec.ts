import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VPUsageComponent } from './vp-about.component';

describe('VPUsageComponent', () => {
  let component: VPUsageComponent;
  let fixture: ComponentFixture<VPUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VPUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VPUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
