import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  showLoginPage = true;
  getLoginDetailsFromUser=[];
  getRegistrationDetailsFromUser=[]
  constructor(private router: Router) { }

  ngOnInit() {
  }
 toggle(condition: String) {
   if (condition === 'login') {
     this.showLoginPage = true;
   } else {
     this.showLoginPage = false;
   }
 }
 toggleEventHandler($event) {
   this.showLoginPage = true;
 }
 getLoginDetails(event:string[]){
   this.getLoginDetailsFromUser=event;
   this.router.navigate(['/home']);
 }
 getRegistrationDetails(event:string[]){
   this.getRegistrationDetailsFromUser=event;
   console.log("reg par",this.getRegistrationDetailsFromUser)
 }
}
