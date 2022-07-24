import { Component, OnInit } from '@angular/core';
import { MAS } from 'src/app/Interfaces/Stocks';
import { StocksService } from 'src/app/Services/stocks.service';

@Component({
  selector: 'app-mas',
  templateUrl: './mas.component.html',
  styleUrls: ['./mas.component.css']
})
export class MasComponent implements OnInit {

  MAS!: MAS;

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
    this.service.getMAS().subscribe((data: MAS) => {
      this.MAS = data;
    });
  }
  ngOnInit(): void {
  }

}
