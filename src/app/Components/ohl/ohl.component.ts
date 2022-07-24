import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/Services/stocks.service';
import { OHL } from 'src/app/Interfaces/Stocks';

@Component({
  selector: 'app-ohl',
  templateUrl: './ohl.component.html',
  styleUrls: ['./ohl.component.css']
})
export class OhlComponent implements OnInit {
  OHL!: OHL;

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
    this.service.getOHL().subscribe((data: OHL) => {
      this.OHL = data;
    });
  }

  ngOnInit(): void {
  }

}
