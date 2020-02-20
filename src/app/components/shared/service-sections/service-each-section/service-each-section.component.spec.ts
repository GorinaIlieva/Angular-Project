import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEachSectionComponent } from './service-each-section.component';

describe('ServiceEachSectionComponent', () => {
  let component: ServiceEachSectionComponent;
  let fixture: ComponentFixture<ServiceEachSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEachSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEachSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
