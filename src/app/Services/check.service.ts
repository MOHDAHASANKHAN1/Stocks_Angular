import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CheckType } from '../Interfaces/Check';

@Injectable({
  providedIn: 'root',
})
export class CheckService {
  checkLogin(Token: String) {
    return this.http.post<CheckType>(
      'https://stocks-backend-node-rest-6gbnyungo-mohdahasankhan1.vercel.app/Check',
      { Token }
    );
  }
  constructor(private http: HttpClient) {}
}
