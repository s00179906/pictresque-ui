import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDateFiltererComponent } from './post-date-filterer.component';

describe('PostDateFiltererComponent', () => {
  let component: PostDateFiltererComponent;
  let fixture: ComponentFixture<PostDateFiltererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDateFiltererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDateFiltererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
