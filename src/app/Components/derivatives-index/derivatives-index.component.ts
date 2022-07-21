import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RecordedDerivativeIndex, LiveDerivativeIndex } from 'src/app/Interfaces/DerivativeIndex';
import { DerivativeIndexService } from 'src/app/Services/derivative-index.service';

@Component({
  selector: 'app-derivatives-index',
  templateUrl: './derivatives-index.component.html',
  styleUrls: ['./derivatives-index.component.css']
})
export class DerivativesIndexComponent implements OnInit {

  Title: string = '';

  LiveDerivativeIndex: LiveDerivativeIndex[] = [];
  RecordedDerivativeIndex5m: RecordedDerivativeIndex[] = [];
  RecordedDerivativeIndex15m: RecordedDerivativeIndex[] = [];

  Checknp(n: number): number {
    return Math.sign(n)
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
    if ((Math.max(...arr.map((i: any) => i.openInterest))) == value) {
      return true;
    }
    return false;
  }

  Checkcentre(arr: any, value: any): boolean {
    if ((arr[(arr.length - 1) / 2].openInterest) == value) {
      return true;
    }
    return false;
  }

  constructor(private route: ActivatedRoute, private http: HttpClient, private service: DerivativeIndexService) {
    this.route.paramMap.subscribe(params => {
      let indexname: any = params.get('indexname');
      this.Title = indexname.toUpperCase();
      this.service.getLiveDerivativeIndex(indexname).subscribe((data: any) => {
        this.LiveDerivativeIndex = data;
      });
      this.service.getRecordedDerivativeIndex5m(indexname).subscribe((data: any) => {
        this.RecordedDerivativeIndex5m = data.reverse();
      });
      this.service.getRecordedDerivativeIndex15m(indexname).subscribe((data: any) => {
        this.RecordedDerivativeIndex15m = data.reverse();
      });
    });
  }

  ngOnInit(): void {
  }

}
