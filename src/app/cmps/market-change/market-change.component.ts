import { Component, Input, OnInit } from '@angular/core';
import { CoinServiceService } from 'src/app/services/coin-service.service';


@Component({
  selector: 'market-change',
  templateUrl: './market-change.component.html',
  styleUrls: ['./market-change.component.scss']
})
export class MarketChangeComponent implements OnInit {
  marketChange: any = ''
  @Input() stockChange: string = ''

  constructor(private coinServiceService: CoinServiceService) { }

  async ngOnInit(): Promise<void> {
    // console.log(this.stockChange);
    
    this.marketChange = await this.coinServiceService.getMarketChange()
    this.checkMarketChange()
    console.log(this.marketChange);
  }

  checkMarketChange = () => {
    return this.marketChange[0] === '+' ? true : false
  }
  checkStockChange = () => {
    return this.stockChange[0] === '+' ? true : false
  }

}
