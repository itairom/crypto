import { Component, Input, OnInit, NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Currency } from 'src/app/models/currency';
import { CurrencyListComponent } from '../currency-list/currency-list.component';

@Component({
  selector: 'currency-preview',
  templateUrl: './currency-preview.component.html',
  styleUrls: ['./currency-preview.component.scss'],
})

export class CurrencyPreviewComponent implements OnInit {

  @Input() item: Currency = null;

  constructor(
    private currencyListComponent:CurrencyListComponent,
    private appRoutingModule: AppRoutingModule
  ) {

    
  }
  getFormatPrice(){
    
    if(this.item.volume_24h_mil){
      return  new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 6 }).format(this.item.volume_24h_mil)
    }
    else return  new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 6 }).format(this.item.price)
   
  }

  ngOnInit(): void {    
    if (!this.item) return
  }

}
