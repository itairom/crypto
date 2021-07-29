import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit, AfterContentInit {

  @Input() currencyList: Currency[] = [];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.currencyList);
  }
  
  ngAfterContentInit():void{

  }

}
