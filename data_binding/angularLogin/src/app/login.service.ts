import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }

  checkUser():Observable<Login[]> {
    return this.http.get<Login[]>("http://localhost:3000/login");//Using a fake json server to retrieve data
  }

  createLogin(login:Login){
    this.http.post("http://localhost:3000/login",login).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
}