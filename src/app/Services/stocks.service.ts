import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OHL, MAS, TGNL } from '../Interfaces/Stocks';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  getOHL() {
    return this.http.get<OHL>(
      `https://stocks-backend-node-rest.vercel.app/OHL`
    );
  }

  getMAS() {
    return this.http.get<MAS>(
      `https://stocks-backend-node-rest.vercel.app/MAS`
    );
  }

  getTGNL() {
    return this.http.get<TGNL>(
      `https://stocks-backend-node-rest.vercel.app/TGNL`
    );
  }

  constructor(private http: HttpClient) {}
}
