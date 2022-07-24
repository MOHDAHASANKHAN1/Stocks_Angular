import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OHL, MAS, TGNL } from '../Interfaces/Stocks';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  getOHL() {
    return this.http.get<OHL>(`https://stocks-backend-nse.herokuapp.com/OHL`);
  }

  getMAS() {
    return this.http.get<MAS>(`https://stocks-backend-nse.herokuapp.com/MAS`);
  }

  getTGNL() {
    return this.http.get<TGNL>(`https://stocks-backend-nse.herokuapp.com/TGNL`);
  }

  constructor(private http: HttpClient) { }
}
