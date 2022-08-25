import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CheckType } from '../Interfaces/Check';
import { SignupType } from '../Interfaces/Signup';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  signupUser(data: SignupType) {
    return this.http.post<CheckType>(
      'https://stocks-backend-nse.herokuapp.com/Register',
      data
    );
  }

  constructor(private http: HttpClient) {}
}
