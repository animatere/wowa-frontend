import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CardService {

  baseURL: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getCards(): Observable<any> {
    return this.httpClient.get(this.baseURL + "/card/all")
  }
  createCard(type:string, text:string, category:string): Observable<any> {
    return this.httpClient.post(this.baseURL + "/card", {type: type, cardText: text, category: category})
  }
}
