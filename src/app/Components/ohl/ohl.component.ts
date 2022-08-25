import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/Services/stocks.service';
import { OHL } from 'src/app/Interfaces/Stocks';
import { Store } from '@ngrx/store';
import { RootReducerState } from 'src/app/Redux/Reducer';
import { Check_Route } from 'src/app/Redux/Action/Check_Route';
import { Router } from '@angular/router';
import { CheckService } from 'src/app/Services/check.service';
import { CheckType } from 'src/app/Interfaces/Check';

@Component({
  selector: 'app-ohl',
  templateUrl: './ohl.component.html',
  styleUrls: ['./ohl.component.css'],
})
export class OhlComponent implements OnInit {
  OHL!: OHL;

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

  constructor(
    private sservice: StocksService,
    private router: Router,
    private store: Store<RootReducerState>,
    private service: CheckService
  ) {
    this.service.checkLogin().subscribe((data: CheckType) => {
      if (!data.Success) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new Check_Route({ Route: 'OHL', Title: '' }));
    this.sservice.getOHL().subscribe((data: OHL) => {
      this.OHL = data;
      this.store.dispatch(
        new Check_Route({
          Route: 'OHL',
          Title: `OHL STOCKS DATA ${this.OHL.Date}`,
        })
      );
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new Check_Route({ Route: '', Title: '' }));
  }
}
