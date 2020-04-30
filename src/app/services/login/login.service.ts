import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { map } from 'rxjs/operators';
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

 noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  public createUser(email: String, password: String, fullName: String) {
    const payload = {
      email: email,
      password: password,
      fullName: fullName
    }
    return this.httpClient.post( environment.baseURL + 'api/user/createUser',
     payload , this.noAuthHeader);
  }


}
