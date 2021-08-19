import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { reducers, metaReducers } from './store/store';
import { AppEffects } from './store/app.effects';

import { AppComponent } from './root-component/index';
import { HomeComponent } from './pages/home/home.component';
import { ItemAppComponent } from './pages/item-app/item-app.component';

import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { MenuComponent } from './menu/menu.component';
import { AxiosService } from './services/axios.service';
import { TopMenuComponent } from './cmps/top-menu/top-menu.component';
import { AllCurrenciesComponent } from './cmps/all-currencies/all-currencies.component';
import { TruckedCurrenciesComponent } from './cmps/trucked-currencies/trucked-currencies.component';
import { CurrencyPreviewComponent } from './cmps/currency-preview/currency-preview.component';
import { MarketChangeComponent } from './cmps/market-change/market-change.component';
import { CurrencyListComponent } from './cmps/currency-list/currency-list.component';
import { CurrencyDetailsComponent } from './cmps/currency-details/currency-details.component';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './cmps/chart/chart.component'

;

@NgModule({
  exports:[
    TopMenuComponent,
    // AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ItemAppComponent,
    AppHeaderComponent,
    MenuComponent,
    TopMenuComponent,
    AllCurrenciesComponent,
    TruckedCurrenciesComponent,
    CurrencyPreviewComponent,
    MarketChangeComponent,
    CurrencyListComponent,
    CurrencyDetailsComponent,
    ChartComponent,
  ],
  imports: [
    // HttpClientModule,
    // MatIconModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [AxiosService],
  bootstrap: [AppComponent],
})
export class AppModule { }
