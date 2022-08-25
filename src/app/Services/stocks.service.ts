import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OHL, MAS, TGNL } from '../Interfaces/Stocks';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  getOHL() {
    return this.http.get<OHL>(`http://localhost:3001/OHL`);
  }

  getMAS() {
    return this.http.get<MAS>(`http://localhost:3001/MAS`);
  }

  getTGNL() {
    return this.http.get<TGNL>(`http://localhost:3001/TGNL`);
  }

  constructor(private http: HttpClient) {}
}
