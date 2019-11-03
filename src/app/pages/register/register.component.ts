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

  registerUser = (email, password) => {
    let canLogin = false;
    this.pictresqueAPI.registerUser(email, password).subscribe(
      data => {
        console.log('success', data);
        canLogin = true;
        if (canLogin) {
          console.log('can login> ', canLogin);
          this.showSignin();
        }
      },
      error => console.log(error.error.message)
    );
  };

  loginUser = (email, password) => {
    if (!email || !password) {
      alert('Please enter all fields!');
    } else {
      this.pictresqueAPI.loginUser(email, password).subscribe(
        data => {
          this.router.navigate(['home']);
          console.log('success', data);
        },
        error => console.log(error.error.message)
      );
    }
  };

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(6)]
      })
    });
  }
}
