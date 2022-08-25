import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  RecordedDerivativeIndex,
  LiveDerivativeIndex,
} from '../Interfaces/DerivativeIndex';

@Injectable({
  providedIn: 'root',
})
export class DerivativeIndexService {
  getLiveDerivativeIndex(Symbol: String) {
    return this.http.get<LiveDerivativeIndex>(
      `https://stocks-backend-nse.herokuapp.com/Live-${Symbol}`
    );
  }

  getRecordedDerivativeIndex5m(Symbol: String) {
    return this.http.get<RecordedDerivativeIndex>(
      `https://stocks-backend-nse.herokuapp.com/recorded-${Symbol}-5m`
    );
  }

  getRecordedDerivativeIndex15m(Symbol: String) {
    return this.http.get<RecordedDerivativeIndex>(
      `https://stocks-backend-nse.herokuapp.com/recorded-${Symbol}-15m`
    );
  }

  constructor(private http: HttpClient) {}
}
