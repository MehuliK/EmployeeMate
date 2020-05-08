import { Component, OnInit ,Output,EventEmitter, Input} from '@angular/core';
import {LoginService} from '../../services/login/login.service';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms'
//import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //faEye=faEye;
  //faEyeSlash=faEyeSlash;
  @Input() showInvalidDiv:boolean;
  @Output() dataInputFormObject:EventEmitter<string[]> = new EventEmitter<string[]>();
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
   email: string = '';
   password: string = '';
  showPasswordValue: boolean=false;
  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {

  }
  toggle_password(){
    this.showPasswordValue=!this.showPasswordValue;
        if( this.showPasswordValue){
          document.getElementById('passwordLog').setAttribute("type", "text");
        }else{
          document.getElementById('passwordLog').setAttribute("type", "password");
        }
  }
  submit(){
  this.email=this.form.get('email').value;
   this.password=this.form.get('password').value;
   this.dataInputFormObject.emit([this.email,this.password]);
  }
  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.email=this.form.get('email').value;
      this.password=this.form.get('password').value;
      this.dataInputFormObject.emit([this.email,this.password]);
    }
  }
}
