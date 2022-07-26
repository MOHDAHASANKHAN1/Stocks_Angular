import { Component, OnInit } from '@angular/core';
import { LoginType } from 'src/app/Interfaces/Login';
import { SignupType } from 'src/app/Interfaces/Signup';
import { LoginService } from 'src/app/Services/login.service';
import { SignupService } from 'src/app/Services/signup.service';
import { CheckService } from 'src/app/Services/check.service';
import { CheckType } from 'src/app/Interfaces/Check';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-poster-and-login-signup',
  templateUrl: './poster-and-login-signup.component.html',
  styleUrls: ['./poster-and-login-signup.component.css'],
})
export class PosterAndLoginSignupComponent implements OnInit {
  posterT: boolean = true;
  loginT: boolean = false;
  registerT: boolean = false;

  Success: boolean = false;

  register(): void {
    this.posterT = false;
    this.loginT = false;
    this.registerT = true;
  }

  login(): void {
    this.posterT = false;
    this.registerT = false;
    this.loginT = true;
  }

  home(): void {
    this.posterT = true;
    this.registerT = false;
    this.loginT = false;
  }

  Signup(data: SignupType) {
    const { Name, Email, Password } = data;
    this.serviceSignup
      .signupUser({ Name, Email, Password })
      .subscribe((data: CheckType) => {
        if (data.Success) {
          this.Success = data.Success;
          this.posterT = true;
          this.registerT = false;
          this.loginT = false;
          this.cookie.set('Token', data.Token);
          alert('You Have Successfully Signup');
          window.location.reload();
        } else {
          this.posterT = false;
          this.registerT = false;
          this.loginT = true;
          alert('You Have Already Registred Please Login');
        }
      });
  }

  Login(data: LoginType) {
    const { Email, Password } = data;
    this.serviceLogin
      .loginUser({ Email, Password })
      .subscribe((data: CheckType) => {
        if (data.Success) {
          this.Success = data.Success;
          this.posterT = true;
          this.registerT = false;
          this.loginT = false;
          this.cookie.set('Token', data.Token);
          alert('You Have Successfully Login');
          window.location.reload();
        } else {
          alert('Invalid User Name Or Password........');
        }
      });
  }

  constructor(
    private serviceSignup: SignupService,
    private serviceLogin: LoginService,
    private service: CheckService,
    private cookie: CookieService
  ) {
    this.service
      .checkLogin(this.cookie.get('Token'))
      .subscribe((data: CheckType) => {
        if (data.Success) {
          this.Success = data.Success;
          this.posterT = true;
          this.registerT = false;
          this.loginT = false;
        }
      });
  }

  ngOnInit(): void {}
}
