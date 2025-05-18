import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient
  ) { }


  login(user:User):Observable<User>{
    return this.http.post<User>("http://localhost:8090/auth/login",user);
  }
}
