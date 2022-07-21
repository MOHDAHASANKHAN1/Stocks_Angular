import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DerivativesIndexComponent } from './Components/derivatives-index/derivatives-index.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Derivative-index/:indexname', component: DerivativesIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
