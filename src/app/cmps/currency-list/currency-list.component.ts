import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit, AfterContentInit {

  @Input() currencyList: Currency[] | null = [];
  @Input() message: string

  constructor() { }

  ngOnInit(): void {
    if (!this.currencyList) return
    if (!this.message) return
    console.log(this.message);
  }
  
  ngAfterContentInit():void{

  }

}
