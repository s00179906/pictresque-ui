import {
  async,
  ComponentFixture,
  TestBed,
  inject,
  tick,
  fakeAsync
} from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { RegisterComponent } from "./register.component";
import { By } from "@angular/platform-browser";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { PixbayApiService } from "../../services/pixbay-api.service";

describe("RegisterComponent", () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent, ReactiveFormsModule],
      imports: [FormGroup, ReactiveFormsModule, PixbayApiService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
