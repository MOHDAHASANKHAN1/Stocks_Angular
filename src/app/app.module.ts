import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DerivativesIndexComponent } from './Components/derivatives-index/derivatives-index.component';
import { HomeComponent } from './Components/home/home.component';
import { OhlComponent } from './Components/ohl/ohl.component';
import { MasComponent } from './Components/mas/mas.component';
import { TgnlComponent } from './Components/tgnl/tgnl.component';
import { StocksComponent } from './Components/stocks/stocks.component';
import { StocksHomeComponent } from './Components/stocks-home/stocks-home.component';
import { SearchStockComponent } from './Components/search-stock/search-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    DerivativesIndexComponent,
    HomeComponent,
    OhlComponent,
    MasComponent,
    TgnlComponent,
    StocksComponent,
    StocksHomeComponent,
    SearchStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
