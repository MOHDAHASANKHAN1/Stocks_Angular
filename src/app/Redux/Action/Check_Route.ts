import { CheckRoute } from 'src/app/Interfaces/Check_Route';

export class Check_Route {
  readonly type: string = 'Check_Route';
  readonly payload: CheckRoute;
  constructor(payload: CheckRoute) {
    this.payload = payload;
  }
}
