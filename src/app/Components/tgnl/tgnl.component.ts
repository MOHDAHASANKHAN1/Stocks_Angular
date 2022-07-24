import { Component, OnInit } from '@angular/core';
import { TGNL } from 'src/app/Interfaces/Stocks';
import { StocksService } from 'src/app/Services/stocks.service';

@Component({
  selector: 'app-tgnl',
  templateUrl: './tgnl.component.html',
  styleUrls: ['./tgnl.component.css']
})
export class TgnlComponent implements OnInit {
  TGNL!: TGNL;

  CheckYes(el: String): boolean {
    if (el == "Y") {
      return true;
    }
    return false;
  }

  CheckNo(el: String): boolean {
    if (el == "N") {
      return true;
    }
    return false;
  }

  constructor(private service: StocksService) {
    this.service.getTGNL().subscribe((data: TGNL) => {
      this.TGNL = data;
    });
  }
  ngOnInit(): void {
  }

}
