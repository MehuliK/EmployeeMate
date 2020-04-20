import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showDetailedValuePage:boolean=false;

  constructor() { }

  ngOnInit() {
  }
  getInitialFitlerKeys(event:any){
    this.showDetailedValuePage=true;
    console.log("event in parent",event)
  }

}
