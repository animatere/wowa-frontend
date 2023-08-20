import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpClient.get(this.baseURL + "/user/all")
  }
  createUser(userRole:string, userName:string, userPassword:string): Observable<any> {
    return this.httpClient.post(this.baseURL + "/user", {userRole: userRole, userName: userName, userPassword: userPassword})
  }
  loginUser(userName:string, userPassword:string): Observable<any> {
    return this.httpClient.post(this.baseURL + "/user/login", {userName: userName, userPassword: userPassword})
  }
}