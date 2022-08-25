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
      `http://localhost:3001/Live-${Symbol}`
    );
  }

  getRecordedDerivativeIndex5m(Symbol: String) {
    return this.http.get<RecordedDerivativeIndex>(
      `http://localhost:3001/recorded-${Symbol}-5m`
    );
  }

  getRecordedDerivativeIndex15m(Symbol: String) {
    return this.http.get<RecordedDerivativeIndex>(
      `http://localhost:3001/recorded-${Symbol}-15m`
    );
  }

  constructor(private http: HttpClient) {}
}
