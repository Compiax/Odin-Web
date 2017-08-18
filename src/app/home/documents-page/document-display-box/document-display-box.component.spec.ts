import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDisplayBoxComponent } from './document-display-box.component';

describe('DocumentDisplayBoxComponent', () => {
  let component: DocumentDisplayBoxComponent;
  let fixture: ComponentFixture<DocumentDisplayBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentDisplayBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentDisplayBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
