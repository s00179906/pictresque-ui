import { Component, OnInit } from "@angular/core";
import { PictresqueAPIService } from "src/app/services/pictresque-api.service";
import { Router } from "@angular/router";
import { FacebookAuthService } from "src/app/services/facebook-auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  display: Boolean = true;
  test: Boolean = false;
  registerForm: FormGroup;
  loginForm: FormGroup;
  registerErrors: string;
  loginErrors: string;
  title = "FacebookLogin";

  constructor(
    private FBauthService: FacebookAuthService,
    private pictresqueAPI: PictresqueAPIService,
    private router: Router
  ) {}

  loggedIn: any;
  user: any;

  signInWithFacebook(): void {
    this.FBauthService.signInWithFB();
  }

  showSignin = () => {
    // this.display = true;
    // this.test = false;

    this.display = !this.display;
    console.log(this.display);
  };

  showSignup = () => {
    // this.test = true;
    // this.display = false;
    this.display = !this.display;
    console.log(this.display);
  };

  registerUser = () => {
    let canLogin = false;

    let email = this.registerForm.get("emailSignup").value;
    let password = this.registerForm.get("passwordSignup").value;

    console.log(email, password);

    this.pictresqueAPI.registerUser(email, password).subscribe(
      data => {
        console.log("success", data);
        canLogin = true;
        if (canLogin) {
          console.log("can login> ", canLogin);
          this.showSignin();
        }
      },
      error => {
        console.log(error.error.message), (this.registerErrors = error);
      }
    );
  };

  loginUser = () => {
    let email = this.loginForm.get("emailSignin").value;
    let password = this.loginForm.get("passwordSignin").value;

    // console.log("EMAIL AND PASSWORD FROM LOGIN: ", email, password);

    this.pictresqueAPI.loginUser(email, password).subscribe(
      data => {
        const auth = {
          token: data["token"],
          id: data["_id"]
        };

        localStorage.setItem("auth", JSON.stringify(auth));
        localStorage.setItem("userLoggedIn", "true");

        // console.log(
        //   "auth object parsed",
        //   JSON.parse(localStorage.getItem("auth"))
        // );

        this.router.navigate([""]);
      },
      error => {
        console.log(error.error.message), (this.loginErrors = error);
      }
    );
  };

  get emailSignup() {
    return this.registerForm.get("emailSignup");
  }

  get passwordSignup() {
    return this.registerForm.get("passwordSignup");
  }

  get emailSignin() {
    return this.loginForm.get("emailSignin");
  }

  get passwordSignin() {
    return this.loginForm.get("passwordSignin");
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      emailSignup: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.email]
      }),
      passwordSignup: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.minLength(6)]
      })
    });

    this.loginForm = new FormGroup({
      emailSignin: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.email]
      }),
      passwordSignin: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.minLength(6)]
      })
    });
  }
}
