import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency';

import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss'],

})
export class CurrencyListComponent implements OnInit {

  @Input() currencyList: Currency[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
