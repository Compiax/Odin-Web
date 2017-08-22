import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignspacePageComponent } from './designspace-page.component';

describe('DesignspacePageComponent', () => {
  let component: DesignspacePageComponent;
  let fixture: ComponentFixture<DesignspacePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignspacePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignspacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
