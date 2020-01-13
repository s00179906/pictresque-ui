import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixabaypostDetailsComponent } from './pixabaypost-details.component';

describe('PixabaypostDetailsComponent', () => {
  let component: PixabaypostDetailsComponent;
  let fixture: ComponentFixture<PixabaypostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixabaypostDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixabaypostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
