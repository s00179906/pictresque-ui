import { Component, OnInit } from "@angular/core";
import { PictresqueAPIService } from "src/app/services/pictresque-service/pictresque-api.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { State } from "src/app/store/models/state.model";
import { Store } from "@ngrx/store";
import { ToggleFormActionSuccess } from "src/app/store/actions/pictresque.actions";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerErrors: string;
  $showForm: Boolean;
  constructor(
    private pictresqueAPI: PictresqueAPIService,
    private fb: FormBuilder,
    private store: Store<State>
  ) {
    this.store
      .select(state => state.pictresque.toggleForm)
      .subscribe(value => {
        this.$showForm = value;
      });
  }

  toggleForm() {
    this.store.dispatch(new ToggleFormActionSuccess(true));
  }
  get emailSignup() {
    return this.registerForm.get("emailSignup");
  }

  get passwordSignup() {
    return this.registerForm.get("passwordSignup");
  }

  registerUser(): void {
    let canLogin = false;

    this.pictresqueAPI
      .registerUser(this.emailSignup.value, this.passwordSignup.value)
      .subscribe(
        data => {
          console.log("SUCCESS", data);
          canLogin = true;
          if (canLogin) {
            console.log("CAN LOGIN -->", canLogin);
            // this.toggleForm();
          }
        },
        error => {
          console.log(error.error.message), (this.registerErrors = error);
        }
      );
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      emailSignup: "",
      passwordSignup: ""
    });
    this.registerForm.valueChanges.subscribe(console.log);
  }
}
