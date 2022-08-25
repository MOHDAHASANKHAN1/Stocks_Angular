import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getRoute, getTitle, RootReducerState } from 'src/app/Redux/Reducer';
import { CheckService } from 'src/app/Services/check.service';
import { CheckType } from 'src/app/Interfaces/Check';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  Success: boolean = false;
  Route!: String;
  Title!: String;

  logout(): void {
    this.cookie.delete('Token');
    window.location.reload();
  }

  constructor(
    private store: Store<RootReducerState>,
    private service: CheckService,
    private router: Router,
    private cookie: CookieService
  ) {
    this.router.events.subscribe((ev) => {
      this.service.checkLogin().subscribe((data: CheckType) => {
        if (data.Success) {
          this.Success = data.Success;
          if (this.Success) {
            this.store.select(getRoute).subscribe((data: String) => {
              this.Route = data;
            });
            this.store.select(getTitle).subscribe((data: String) => {
              this.Title = data;
            });
          }
        }
      });
    });
  }

  ngOnInit(): void {}
}
