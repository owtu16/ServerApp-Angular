import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/User';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(user: User) : Observable<User>{
    const url = environment.loginAPIUrl + '/login';
    return this.httpClient.post<User>(url, user);
  }
}
