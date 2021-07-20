import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  
  isMobile: boolean = false
  isShowMenu:boolean=false
  constructor() { }
  
  ngOnInit(): void {
  }
  
  setIsMobile() {
    this.isMobile = !this.isMobile
  }


}
