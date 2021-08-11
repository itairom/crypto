import { Component, Input, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Currency } from 'src/app/models/currency';
import '@angular/compiler';


@Component({
  selector: 'currency-preview',
  templateUrl: './currency-preview.component.html',
  styleUrls: ['./currency-preview.component.scss'],
  
})
export class CurrencyPreviewComponent implements OnInit {

  @Input() item: Currency = null;


  constructor(
    private appRoutingModule: AppRoutingModule
    ) {
console.log('preview constructor');

  }

  ngOnInit(): void {
    if (!this.item) return
  }

}
