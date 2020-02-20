import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronPostPagesComponent } from './jumbotron-post-pages.component';

describe('JumbotronPostPagesComponent', () => {
  let component: JumbotronPostPagesComponent;
  let fixture: ComponentFixture<JumbotronPostPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronPostPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronPostPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
