import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public login(email: String) {
   
    return this.httpClient.get( environment.baseURL + 'getUser/'+email);

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
