import { Component, OnInit } from '@angular/core';
import { PictresqueAPIService } from 'src/app/services/pictresque-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
    private pictresqueAPI: PictresqueAPIService,
    private router: Router
  ) {}
  display: Boolean = false;
  test: Boolean = false;
  title = 'FacebookLogin';

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

  ngOnInit() {}
}
