import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {LoginService} from '../../services/login/login.service';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms'
//import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  //faEye=faEye;
  //faEyeSlash=faEyeSlash;
  @Output() registrationArray:EventEmitter<{[key:string]:string}> = new EventEmitter<{[key:string]:string}>();
  showPasswordValue=false;
  form=new FormGroup({
    name:new FormControl('',Validators.required),
    lname:new FormControl('',Validators.required),
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

  constructor(private loginService: LoginService,
              private router: Router
              ) { }

  ngOnInit() {
  }
  toggle_password(){
    this.showPasswordValue=!this.showPasswordValue;
        if( this.showPasswordValue){
          document.getElementById('passwordReg').setAttribute("type", "text");
        }else{
          document.getElementById('passwordReg').setAttribute("type", "password");
        }
  }

  register() {
  console.log(this.form.value)
  this.registrationArray.emit(this.form.value)
   


  }
  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.registrationArray.emit(this.form.value)
    }
  }
}
