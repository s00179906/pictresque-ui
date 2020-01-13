import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { PictresqueAPIService } from "src/app/services/pictresque-service/pictresque-api.service";
import { State } from "src/app/state/models/state.model";
import { Store } from "@ngrx/store";
import {
  ToggleFormActionSuccess,
  ShowNavbarAction
} from "src/app/state/pictresque.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginErrors: string;
  $showForm: Boolean;

  constructor(
    private pictresqueAPI: PictresqueAPIService,
    private router: Router,
    private fb: FormBuilder,
    private _store: Store<State>
  ) {}

  toggleForm() {
    this._store.dispatch(new ToggleFormActionSuccess(false));
  }

  loginUser(): void {
    let email = this.loginForm.get("emailSignin").value;
    let password = this.loginForm.get("passwordSignin").value;

    this.pictresqueAPI.loginUser(email, password).subscribe(
      data => {
        const auth = {
          token: data["token"],
          id: data["_id"]
        };

        localStorage.setItem("auth", JSON.stringify(auth));
        localStorage.setItem("userLoggedIn", "true");
        this._store.dispatch(new ShowNavbarAction(true));
        this.router.navigate([""]);
      },
      error => {
        console.log(error.error.message), (this.loginErrors = error);
      }
    );
  }

  get emailSignin() {
    return this.loginForm.get("emailSignin");
  }

  get passwordSignin() {
    return this.loginForm.get("passwordSignin");
  }

  ngOnInit() {
    this._store
      .select(state => state.pictresque.toggleForm)
      .subscribe(value => {
        this.$showForm = value;
      });
    this.loginForm = this.fb.group({
      emailSignin: "",
      passwordSignin: ""
    });
    // this.loginForm.valueChanges.subscribe(console.log);
  }
}
