import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CheckType } from '../Interfaces/Check';
import { SignupType } from '../Interfaces/Signup';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  signupUser(data: SignupType) {
    return this.http.post<CheckType>('http://localhost:3001/Register', data, {
      withCredentials: true,
    });
  }

  constructor(private http: HttpClient) {}
}
