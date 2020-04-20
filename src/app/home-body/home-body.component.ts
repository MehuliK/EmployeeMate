import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit {
  @Output() initialFilterValues:EventEmitter<string[]> = new EventEmitter<string[]>();
  searchTextValue:string;
  searchTextCom:string
  cityArray=["Bengaluru","Delhi","Kolkata"];
  companyArray=["IBM","Accenture","TCS","CTS","Zomato"];
  techParkArray=["Manyata Tech Park","Subhramanya Arcade","Embassy Golf Links"]
  searchTexttech: string;
  disableButton: boolean;
  showListData = false;
  isDropDownClick=false;

  constructor() { }

  ngOnInit() {
    this.disableButton=false;
  }
  enterFunction($event) {
    console.log("here")
    this.showListData = true;
    if (this.searchTextValue){
      this.disableButton=true;
    }else{
      this.disableButton=false;
    }
  }
  showAirportCodeList() {
  
    if (this.showListData) {
      this.showListData = false;
      this.isDropDownClick = false;
    } else {
      this.isDropDownClick = true;
      this.showListData = true;
    }
   
  }
  onTouchStart( value): void {
    console.log("val",value)
   this.searchTextValue=value;
    this.showListData = false;
    console.log("this", this.searchTextValue)
    if (this.searchTextValue){
      this.disableButton=true;
    }else{
      this.disableButton=false;
    }
   
  }

  bindValueToInputBoxCity(item:string){
  //  this.searchText=item;
    document.getElementById("cityArrayList").style.display="none";
    this.disableButton=true;
  }
  bindValueToInputBoxCompany(item:string){
    this.searchTextCom=item;
    document.getElementById("companyArrayList").style.display="none";
    this.disableButton=true;
  }
  bindValueToInputBoxTechPark(item:string){
    this.searchTexttech=item;
    document.getElementById("techParkList").style.display="none";
    this.disableButton=true;
  }
 

  showDetailedFilteredValue(){
    this.initialFilterValues.emit([this.searchTextValue,this.searchTextCom,this.searchTexttech])
  }
}
