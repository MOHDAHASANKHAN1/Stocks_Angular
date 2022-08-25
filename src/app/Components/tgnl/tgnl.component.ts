import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TGNL } from 'src/app/Interfaces/Stocks';
import { getRoute, RootReducerState } from 'src/app/Redux/Reducer';
import { StocksService } from 'src/app/Services/stocks.service';
import { Check_Route } from 'src/app/Redux/Action/Check_Route';
import { CheckService } from 'src/app/Services/check.service';
import { Router } from '@angular/router';
import { CheckType } from 'src/app/Interfaces/Check';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tgnl',
  templateUrl: './tgnl.component.html',
  styleUrls: ['./tgnl.component.css'],
})
export class TgnlComponent implements OnInit {
  Success: boolean = false;
  TGNL!: TGNL;

  CheckYes(el: String): boolean {
    if (el == 'Y') {
      return true;
    }
    return false;
  }

  CheckNo(el: String): boolean {
    if (el == 'N') {
      return true;
    }
    return false;
  }

  fetch() {}
  constructor(
    private sservice: StocksService,
    private store: Store<RootReducerState>,
    private router: Router,
    private service: CheckService,
    private cookie: CookieService
  ) {
    this.store.dispatch(new Check_Route({ Route: 'TGNL', Title: '' }));
    this.service
      .checkLogin(this.cookie.get('Token'))
      .subscribe((data: CheckType) => {
        if (!data.Success) {
          this.router.navigate(['/']);
          this.store.dispatch(new Check_Route({ Route: '', Title: '' }));
        }
      });
  }
  route: String = '';
  ngOnInit(): void {
    this.store.select(getRoute).subscribe((data: String) => {
      this.route = data;
    });
    this.sservice.getTGNL().subscribe((data: TGNL) => {
      if (this.route == 'TGNL') {
        console.log('called.....');
        this.TGNL = data;
        this.store.dispatch(
          new Check_Route({
            Route: 'TGNL',
            Title: `TGNL STOCKS DATA ${this.TGNL.Date}`,
          })
        );
      }
    });
  }
  ngOnDestroy() {
    this.store.dispatch(new Check_Route({ Route: '', Title: '' }));
  }
}
