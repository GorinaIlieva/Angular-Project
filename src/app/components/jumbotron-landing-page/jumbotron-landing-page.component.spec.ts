import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronLandingPageComponent } from './jumbotron-landing-page.component';

describe('JumbotronLandingPageComponent', () => {
  let component: JumbotronLandingPageComponent;
  let fixture: ComponentFixture<JumbotronLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
