import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersDisplayBoxComponent } from './members-display-box.component';

describe('MembersDisplayBoxComponent', () => {
  let component: MembersDisplayBoxComponent;
  let fixture: ComponentFixture<MembersDisplayBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersDisplayBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersDisplayBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
