import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VPAboutComponent } from './vp-about.component';

describe('VPAboutComponent', () => {
  let component: VPAboutComponent;
  let fixture: ComponentFixture<VPAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VPAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VPAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
