import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';
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
  isLogined: boolean;
  getLoginDetailsFromUser = [];
  getRegistrationDetailsFromUser = []
  wrongPassword: boolean;
  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.isLogined = false;
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
        }
        else{
          
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
