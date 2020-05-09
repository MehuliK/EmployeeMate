import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//import {AlertService} from '../../services/alert/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  private subscription: Subscription;
  message: any;

  constructor() { }

  ngOnInit() {
      
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
