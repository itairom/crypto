import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Currency } from 'src/app/models/currency';
import { storageService } from 'src/app/services/async-storage.service';
import { AxiosService } from 'src/app/services/axios.service';


@Component({
  selector: 'currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss']
})
export class CurrencyDetailsComponent implements OnInit {
  // @Input() state: any
  items: Currency = null
  isTracked: boolean = null
  activeBtn: string = null

  constructor(
    private axiosService: AxiosService

  ) {

  }

  setActiveBtn(status:string) {
    console.log(status);
    
    this.activeBtn = status
  }

  async setIsTracked() {
    this.isTracked = !this.isTracked
    await this.axiosService.setIsTracked(this.isTracked, this.items.currency_id)
  }

  ngOnInit(): void {
    console.log(history.state.item);

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
