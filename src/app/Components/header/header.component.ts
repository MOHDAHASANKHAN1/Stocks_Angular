import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getRoute, getTitle, RootReducerState } from 'src/app/Redux/Reducer';
import { CheckService } from 'src/app/Services/check.service';
import { CheckType } from 'src/app/Interfaces/Check';
import { Router } from '@angular/router';

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
    alert('hello');
  }

  constructor(
    private store: Store<RootReducerState>,
    private service: CheckService,
    private router: Router
  ) {
    this.router.events.subscribe((ev) => {
      this.service.checkLogin().subscribe((data: CheckType) => {
        if (data.Success) {
          this.Success = data.Success;
        }
      });
    });
  }

  ngOnInit(): void {
    if (this.Success) {
      this.store.select(getRoute).subscribe((data: String) => {
        this.Route = data;
      });
      this.store.select(getTitle).subscribe((data: String) => {
        this.Title = data;
      });
    }
  }
}
