import { Component, OnInit } from '@angular/core';
import { AxiosService } from 'src/app/services/axios.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private axiosService: AxiosService
  ) {

  }

  async ngOnInit(): Promise<void> {
    this.axiosService.yesNoTest() //API EXAMPLE
    const resp = await fetch('https://yesno.wtf/api')
    const data = await resp.json()
  }

}
