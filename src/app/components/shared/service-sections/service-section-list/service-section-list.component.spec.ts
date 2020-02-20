import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSectionListComponent } from './service-section-list.component';

describe('ServiceSectionListComponent', () => {
  let component: ServiceSectionListComponent;
  let fixture: ComponentFixture<ServiceSectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
