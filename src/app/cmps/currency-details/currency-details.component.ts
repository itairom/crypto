import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Currency } from 'src/app/models/currency';
import { storageService } from 'src/app/services/async-storage.service';


@Component({
  selector: 'currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss']
})
export class CurrencyDetailsComponent implements OnInit {
  // @Input() state: any
  items: Currency = null
  isTracked: Boolean = null


  constructor() {

  }

  setIsTracked() {
    this.isTracked = !this.isTracked
  }

  ngOnInit(): void {
    if (history.state.item) {
      this.items = history.state.item
      
      localStorage.setItem('currItem', JSON.stringify(history.state.item))
    }
    else {
      this.items = JSON.parse(localStorage.getItem('currItem'))
    }
    
    this.isTracked = this.items?.is_tracked ? true : false
  }

}
