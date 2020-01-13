import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikeSnackbarComponent } from './dislike-snackbar.component';

describe('DislikeSnackbarComponent', () => {
  let component: DislikeSnackbarComponent;
  let fixture: ComponentFixture<DislikeSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DislikeSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikeSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
