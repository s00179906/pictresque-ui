import { Component, OnInit } from '@angular/core';
import { PictresqueAPIService } from 'src/app/services/pictresque-api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  display: Boolean = false;
  test: Boolean = false;
  form: FormGroup;
  registerErrors: string;
  loginErrors: string;

  constructor(
    private pictresqueAPI: PictresqueAPIService,
    private router: Router
  ) {}

  showSignin = () => {
    this.display = true;
    this.test = false;
  };

  showSignup = () => {
    this.test = true;
    this.display = false;
  };

  registerUser = () => {
    let canLogin = false;

    let email = this.form.get('emailSignup').value;
    let password = this.form.get('passwordSignup').value;

    console.log(email, password);

    this.pictresqueAPI.registerUser(email, password).subscribe(
      data => {
        console.log('success', data);
        canLogin = true;
        if (canLogin) {
          console.log('can login> ', canLogin);
          this.showSignin();
        }
      },
      error => {
        console.log(error.error.message), (this.registerErrors = error);
      }
    );
  };

  loginUser = () => {
    let email = this.form.get('emailSignin').value;
    let password = this.form.get('passwordSignin').value;

    this.pictresqueAPI.loginUser(email, password).subscribe(
      data => {
        this.router.navigate(['home']);
        console.log('success', data);
      },
      error => {
        console.log(error.error.message), (this.loginErrors = error);
      }
    );
  };

  get emailSignup() {
    return this.form.get('emailSignup');
  }

  get passwordSignup() {
    return this.form.get('passwordSignup');
  }

  get emailSignin() {
    return this.form.get('emailSignin');
  }

  get passwordSignin() {
    return this.form.get('passwordSignin');
  }

  ngOnInit() {
    this.form = new FormGroup({
      emailSignup: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email]
      }),
      passwordSignup: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(6)]
      }),
      emailSignin: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email]
      }),
      passwordSignin: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(6)]
      })
    });
  }
}
