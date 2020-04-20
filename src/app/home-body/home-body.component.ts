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
  keyupValue: string;

  constructor() { }

  ngOnInit() {
    this.disableButton=false;
  }
  enterFunction(event) {
    console.log("textval",this.searchTextValue)
    this.keyupValue=event.target.value
    if(event.target.value !== "null" && event.target.value !== "undefined" && event.target.value !== "" ){
      this.showListData = true;
      if(this.searchTextValue !== "null" && this.searchTextValue !== "undefined" && this.searchTextValue !== "" ){
        this.disableButton=false
      }
    }else{
      this.showListData = false;
    }
    
    
  }
  onTouchStart( value): void {
    console.log("val",this.keyupValue)
    console.log("inbox value",value)
   this.searchTextValue=value;
   console.log("searched country",this.searchTextValue)
    this.showListData = false;
    if (this.searchTextValue && this.keyupValue){
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
