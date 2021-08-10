import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'all-currencies',
  templateUrl: './all-currencies.component.html',
  styleUrls: ['./all-currencies.component.scss']
})
export class AllCurrenciesComponent implements OnInit {

  currencyList: Currency[] = null
  message: string = 'bloblo'

  constructor(
    private axiosService: AxiosService
  ) { }

  async ngOnInit(): Promise<void> {

    this.currencyList = await this.axiosService.getCurrenciesList()
    console.log("🚀 ~ file: all-currencies.component.ts ~ line 17 ~ AllCurrenciesComponent ~ ngOnInit ~ currencyList", this.currencyList)
  }

}
