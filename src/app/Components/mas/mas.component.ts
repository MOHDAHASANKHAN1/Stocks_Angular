import { Component, OnInit } from '@angular/core';
import { MAS } from 'src/app/Interfaces/Stocks';
import { StocksService } from 'src/app/Services/stocks.service';
import { Check_Route } from 'src/app/Redux/Action/Check_Route';
import { Store } from '@ngrx/store';
import { RootReducerState } from 'src/app/Redux/Reducer';
import { CheckService } from 'src/app/Services/check.service';
import { Router } from '@angular/router';
import { CheckType } from 'src/app/Interfaces/Check';

@Component({
  selector: 'app-mas',
  templateUrl: './mas.component.html',
  styleUrls: ['./mas.component.css'],
})
export class MasComponent implements OnInit {
  MAS!: MAS;

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
    private store: Store<RootReducerState>,
    private service: CheckService,
    private router: Router
  ) {
    this.service.checkLogin().subscribe((data: CheckType) => {
      if (!data.Success) {
        this.router.navigate(['/']);
      }
    });
  }
  ngOnInit(): void {
    this.store.dispatch(new Check_Route({ Route: 'MAS', Title: '' }));
    this.sservice.getMAS().subscribe((data: MAS) => {
      this.MAS = data;
      this.store.dispatch(
        new Check_Route({
          Route: 'MAS',
          Title: `MAS STOCKS DATA ${this.MAS.Date}`,
        })
      );
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new Check_Route({ Route: '', Title: '' }));
  }
}
