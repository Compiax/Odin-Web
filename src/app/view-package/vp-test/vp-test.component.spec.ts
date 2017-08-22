import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VPTestComponent } from './vp-about.component';

describe('VPTestComponent', () => {
  let component: VPTestComponent;
  let fixture: ComponentFixture<VPTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VPTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VPTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
