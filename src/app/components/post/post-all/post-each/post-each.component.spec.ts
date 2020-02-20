import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEachComponent } from './post-each.component';

describe('PostEachComponent', () => {
  let component: PostEachComponent;
  let fixture: ComponentFixture<PostEachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
