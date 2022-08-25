import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CheckType } from '../Interfaces/Check';

@Injectable({
  providedIn: 'root',
})
export class CheckService {
  checkLogin() {
    return this.http.get<CheckType>(
      'https://stocks-backend-nse.herokuapp.com/Check',
      {
        withCredentials: true,
      }
    );
  }
  constructor(private http: HttpClient) {}
}
