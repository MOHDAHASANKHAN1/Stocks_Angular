import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DerivativesIndexComponent } from './Components/derivatives-index/derivatives-index.component';
import { HomeComponent } from './Components/home/home.component';
import { MasComponent } from './Components/mas/mas.component';
import { OhlComponent } from './Components/ohl/ohl.component';
import { SearchStockComponent } from './Components/search-stock/search-stock.component';
import { StocksHomeComponent } from './Components/stocks-home/stocks-home.component';
import { TgnlComponent } from './Components/tgnl/tgnl.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Derivative-index/:indexname', component: DerivativesIndexComponent },
  {
    path: 'Stocks',
    children: [
      { path: '', component: StocksHomeComponent },
      { path: 'OHL', component: OhlComponent },
      { path: 'MAS', component: MasComponent },
      { path: 'TGNL', component: TgnlComponent },
      { path: 'Search/:symbol', component: SearchStockComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
