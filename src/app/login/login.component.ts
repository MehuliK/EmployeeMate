import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form=new FormGroup({
    email:new FormControl('',[
      Validators.required,
       Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
      Validators.email
    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10)
    ])
  })
  // public email: string = '';
  // public password: string = '';
  // public isInvalidEmail: Boolean;
  // public isInvalidPass: Boolean;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }
  showRegistrationPage(){
    console.log("hey")
  }
  submit(){
    console.log("called")
  }
}
