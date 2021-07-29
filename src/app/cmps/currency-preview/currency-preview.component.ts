import { Component, Input, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'currency-preview',
  templateUrl: './currency-preview.component.html',
  styleUrls: ['./currency-preview.component.scss']
})
export class CurrencyPreviewComponent implements OnInit {

  @Input() item: Currency = null;


  constructor() { }

  ngOnInit(): void {
    // console.log(this.item);
    
  }

}
