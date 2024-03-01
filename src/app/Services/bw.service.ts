import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BwService {

  constructor(private http: HttpClient) { }
  TopHeadlinesNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b5a82daa34d542c0a4d30d4c292b3c80';
  TcHeadlines():Observable<any>{
    return this.http.get(this.TopHeadlinesNews)
  }
}
