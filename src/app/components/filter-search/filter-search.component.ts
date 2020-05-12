import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.scss']
})
export class FilterSearchComponent implements OnInit {
  propertyArray=["PG","Flat"];
  tenantTypeArray=["Boys","Girls","Any"];
  sharingTypePGArray=["1RK","1BHK","2BHK","3BHK"]
  constructor() { }

  ngOnInit(): void {
  }

  onItemChange(value:any){
    console.log("val",value)
      }
      onItemChangeCheck(value:any){
        console.log("val check",value)
      }
      onItemChangeSharingType(value:any){
       console.log("val sharing",value)
      }
}
