import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
///import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {
//   title = 'employee';
//   misthi = "abc"
// }

export class AppComponent implements OnInit {
  //faEye=faEye;
 // faEyeSlash=faEyeSlash;
  headerFooter: boolean;

  constructor(
     private router: Router){}


 ngOnInit() {
  this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if((event.url !== '/login') && (event.url !== '/')) {
        this.headerFooter = true
        } else {
         this.headerFooter = false
        }
      }
    });
}

}
