import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency';

import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'trucked-currencies',
  templateUrl: './trucked-currencies.component.html',
  styleUrls: ['./trucked-currencies.component.scss']
})
export class TruckedCurrenciesComponent implements OnInit {
  truckedCurrencies:  Currency[] = null

  constructor(
    private axiosService: AxiosService
  ) { }


  async ngOnInit(): Promise<void> {
    this.truckedCurrencies = await this.axiosService.getTruckedCurrenciesList()
  }

}
