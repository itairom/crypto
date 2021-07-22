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

}
