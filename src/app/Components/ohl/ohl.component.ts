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
  constructor(private service: StocksService) {
    this.service.getOHL().subscribe((data: OHL) => {
      this.OHL = data;
    });
  }

  ngOnInit(): void {
  }

}
