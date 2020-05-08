import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  showLoginPage = true;
  isLogined:boolean;
  getLoginDetailsFromUser=[];
  getRegistrationDetailsFromUser=[]
  wrongPassword: boolean;
  constructor(private router: Router,private UserService:UserService) { }

  ngOnInit() {
    this.isLogined=false;
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
   const email=this.getLoginDetailsFromUser[0];
    this.UserService.login(email)
      .subscribe((data) =>{
        console.log("data",data)
        if( data[0].password=this.getLoginDetailsFromUser[1]){
          this.isLogined=true;
        console.log("200",data)
        this.router.navigate(['/home'])
        }else{
          this.wrongPassword=true;
        }
     
    
    });

 }
 getRegistrationDetails(event:string[]){
   this.getRegistrationDetailsFromUser=event;
   console.log("reg par",this.getRegistrationDetailsFromUser)
 }
}
