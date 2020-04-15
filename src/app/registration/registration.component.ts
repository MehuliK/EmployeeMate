import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {UserService} from '../user/user.service';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form=new FormGroup({
    firstName:new FormControl('',Validators.required),
    secondName:new FormControl('',Validators.required),
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

  constructor(private userService: UserService,
              private router: Router
              ) { }

  ngOnInit() {
  }

  register() {
    // this.userService.createUser(this.email, this.password1, this.fullName)
    //   .subscribe((response: any) =>{
    // if (response.status === 200) {
    //     alert(response.msg);
    //     this.email = '';
    //     this.password1 = '';
    //     this.password1 = '';
    //     this.fullName = '';
    //     this.toggleHandler.emit('login');
    // }
    // })

  }
}
