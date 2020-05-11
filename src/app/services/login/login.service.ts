import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { map ,first} from 'rxjs/operators';
import {User} from 'src/app/model/User';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public login(email: String,password:String) {
   
    return this.httpClient.get( environment.baseURL + 'getUser/'+email+"/"+password)
    .pipe(map(user=>{

     if(user!=null){
       sessionStorage.setItem("currentUser",JSON.stringify(user));
     }
     return user;

    }));

  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('currentUser');
    
}


  public createUser(userModel:User) {
   
    return this.httpClient.post( environment.baseURL + 'addUser/',userModel);
  }


}
