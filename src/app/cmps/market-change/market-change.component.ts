import { Component, Input, OnInit } from '@angular/core';
import { CoinServiceService } from 'src/app/services/coin-service.service';


@Component({
  selector: 'market-change',
  templateUrl: './market-change.component.html',
  styleUrls: ['./market-change.component.scss']
})
export class MarketChangeComponent implements OnInit {
  marketChange: any = ''
  @Input() change: string = ''

  constructor(private coinServiceService: CoinServiceService) { }

  async ngOnInit(): Promise<void> {
    this.marketChange = await this.coinServiceService.getMarketChange()
    this.checkMarketChange()
  }

  checkMarketChange = () => {
    return this.marketChange[0] === '+' ? true : false
  }

}
