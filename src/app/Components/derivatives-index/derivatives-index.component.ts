import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  RecordedDerivativeIndex,
  LiveDerivativeIndex,
} from 'src/app/Interfaces/DerivativeIndex';
import { Check_Route } from 'src/app/Redux/Action/Check_Route';
import { RootReducerState } from 'src/app/Redux/Reducer';
import { DerivativeIndexService } from 'src/app/Services/derivative-index.service';
import { CheckService } from 'src/app/Services/check.service';
import { CheckType } from 'src/app/Interfaces/Check';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-derivatives-index',
  templateUrl: './derivatives-index.component.html',
  styleUrls: ['./derivatives-index.component.css'],
})
export class DerivativesIndexComponent implements OnInit {
  Title: string = '';

  LiveDerivativeIndex: LiveDerivativeIndex[] = [];
  RecordedDerivativeIndex5m: RecordedDerivativeIndex[] = [];
  RecordedDerivativeIndex15m: RecordedDerivativeIndex[] = [];

  Checknp(n: number): number {
    return Math.sign(n);
  }
  Show: boolean = false;
  SelectTimeframe(n: number) {
    if (n == 5) {
      this.Show = false;
    } else if (n == 15) {
      this.Show = true;
    }
  }

  Checklargest(arr: any, value: any): boolean {
    if (Math.max(...arr.map((i: any) => i.openInterest)) == value) {
      return true;
    }
    return false;
  }
  Checkmin(arr: any, value: any): boolean {
    if (Math.min(...arr.map((i: any) => i.openInterest)) == value) {
      return true;
    }
    return false;
  }
  Checklargestvol(arr: any, value: any): boolean {
    if (Math.max(...arr.map((i: any) => i.totalTradedVolume)) == value) {
      return true;
    }
    return false;
  }
  Checkminvol(arr: any, value: any): boolean {
    if (Math.min(...arr.map((i: any) => i.totalTradedVolume)) == value) {
      return true;
    }
    return false;
  }
  Checklargestiv(arr: any, value: any): boolean {
    if (Math.max(...arr.map((i: any) => i.impliedVolatility)) == value) {
      return true;
    }
    return false;
  }
  Checkminiv(arr: any, value: any): boolean {
    if (Math.min(...arr.map((i: any) => i.impliedVolatility)) == value) {
      return true;
    }
    return false;
  }
  ChecklargestChngoip(arr: any, value: any): boolean {
    if (Math.max(...arr.map((i: any) => i.changeinOpenInterest)) == value) {
      return true;
    }
    return false;
  }
  ChecklargestChngoin(arr: any, value: any): boolean {
    if (Math.min(...arr.map((i: any) => i.changeinOpenInterest)) == value) {
      return true;
    }
    return false;
  }

  Checkcentre(arr: any, value: any): boolean {
    if (arr[(arr.length - 1) / 2].strikePrice == value) {
      return true;
    }
    return false;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dservice: DerivativeIndexService,
    private store: Store<RootReducerState>,
    private service: CheckService,
    private cookie: CookieService
  ) {
    this.service
      .checkLogin(this.cookie.get('Token'))
      .subscribe((data: CheckType) => {
        if (!data.Success) {
          this.router.navigate(['/']);
          this.store.dispatch(new Check_Route({ Route: '', Title: '' }));
        }
      });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let indexname: any = params.get('indexname');
      this.Title = indexname.toUpperCase();
      if (this.Title == 'BANKNIFTY' || this.Title == 'NIFTY') {
        this.store.dispatch(new Check_Route({ Route: this.Title, Title: '' }));
        this.dservice
          .getLiveDerivativeIndex(indexname)
          .subscribe((data: any) => {
            this.LiveDerivativeIndex = data;
            const Title = `${this.Title} OPTION DATA ${this.LiveDerivativeIndex[0].Date}`;
            this.store.dispatch(
              new Check_Route({ Route: this.Title, Title: Title })
            );
          });
        this.dservice
          .getRecordedDerivativeIndex5m(indexname)
          .subscribe((data: any) => {
            this.RecordedDerivativeIndex5m = data.reverse();
          });
        this.dservice
          .getRecordedDerivativeIndex15m(indexname)
          .subscribe((data: any) => {
            this.RecordedDerivativeIndex15m = data.reverse();
          });
      } else {
        this.router.navigate(['/Derivative-index/banknifty']);
      }
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new Check_Route({ Route: '', Title: '' }));
  }
}
