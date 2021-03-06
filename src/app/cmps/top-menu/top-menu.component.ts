import { Component, OnInit } from '@angular/core';
import { CoinServiceService } from 'src/app/services/coin-service.service';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  marketChange: any = ''

  constructor(private coinServiceService: CoinServiceService) { 

  }
  
  // ngOnInit(): void {

  // }
  
  async ngOnInit(): Promise<void> {
    this.marketChange = await this.coinServiceService.getMarketChange()
    this.checkMarketChange()
  }
  
  checkMarketChange =()=>{
    return this.marketChange[0] ==='+' ? true :false
  }

}
