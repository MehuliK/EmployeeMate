import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { AlertService } from '../../services/alert/alert.service';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  showLoginPage = true;
  returnUrl: string;
  isLoggedIn: boolean;
  getLoginDetailsFromUser = [];
  getRegistrationDetailsFromUser = []
  showInvalidDiv:boolean=false;
  constructor(
    private router: Router,
    private userService: LoginService,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.isLoggedIn = false;
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    this.userService.logout();
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

  
  getLoginDetails(event: string[]) {
    this.getLoginDetailsFromUser = event;
    const email = this.getLoginDetailsFromUser[0];
    const password = this.getLoginDetailsFromUser[1];
    this.userService.login(email, password)
      .pipe(first())
      .subscribe((data) => {
        if(data!=null){
          this.router.navigate([this.returnUrl]);
          this.isLoggedIn=true;
          console.log("GET:",data);
        }
        else{
          console.log("GET: call failed");
          this.showInvalidDiv=true;
        }
        
      },
        error => {
          this.alertService.error(error);
        });

  }
  getRegistrationDetails(event: string[]) {
    this.getRegistrationDetailsFromUser = event;
    console.log("reg par", this.getRegistrationDetailsFromUser)
  }
}
