import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CheckType } from '../Interfaces/Check';
import { LoginType } from '../Interfaces/Login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginUser(data: LoginType) {
    return this.http.post<CheckType>(
      'https://stocks-backend-nse.herokuapp.com/Login',
      data,
      {
        withCredentials: true,
      }
    );
  }
  constructor(private http: HttpClient) {}
}
