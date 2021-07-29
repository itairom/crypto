import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';

@Injectable({
  providedIn: 'root'
})
export class CoinServiceService {
  constructor(private axiosService: AxiosService) {
  }

  getMarketChange = async () => {
    const marketChange = await this.axiosService.FetchMarketChange()
    return marketChange
  }

  getCurrenciesList = async () => {
    const currenciesList = await this.axiosService.getCurrenciesList()
    return currenciesList
  }

}
