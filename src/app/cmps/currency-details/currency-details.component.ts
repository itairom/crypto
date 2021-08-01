import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss']
})
export class CurrencyDetailsComponent implements OnInit {
// @Input() state: any
  constructor(private location:Location) { }
  // const {item}:any = history.state

  ngOnInit(): void {
    console.log(history.state);
    console.log(this.location.getState())
  }

}
