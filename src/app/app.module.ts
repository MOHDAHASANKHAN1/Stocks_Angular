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
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PosterAndLoginSignupComponent } from './Components/poster-and-login-signup/poster-and-login-signup.component';
import { CardsComponent } from './Components/cards/cards.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './Redux/Reducer';

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
    SearchStockComponent,
    HeaderComponent,
    FooterComponent,
    PosterAndLoginSignupComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(rootReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
