import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { AllCurrenciesComponent } from './cmps/all-currencies/all-currencies.component';
import { CurrencyDetailsComponent } from './cmps/currency-details/currency-details.component';
import { TruckedCurrenciesComponent } from './cmps/trucked-currencies/trucked-currencies.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemAppComponent } from './pages/item-app/item-app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'all_currencies', component: AllCurrenciesComponent },
      { path: 'tracked_currencies', component: TruckedCurrenciesComponent }
    ]
  },
  { path: 'details/:id', component: CurrencyDetailsComponent },

  // { path: 'home/all_currencies', component: AllCurrenciesComponent },
  // { path: 'item', component: ItemAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

