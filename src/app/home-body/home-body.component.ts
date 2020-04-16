import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit {
  showDetailedPropertyView:boolean=false;

  constructor() { }

  ngOnInit() {
    this.showDetailedPropertyView=false;
  }
  showDetailedProperty(){
    this.showDetailedPropertyView=true;
  }

}
