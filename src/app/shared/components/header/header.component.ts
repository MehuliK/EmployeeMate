import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private userService:UserService
   
    
    ) {

   }

  ngOnInit() {
  }
  logout() {
    this.userService.logout();
    sessionStorage.clear();
    this.router.navigate(['/login']);

  }

}
