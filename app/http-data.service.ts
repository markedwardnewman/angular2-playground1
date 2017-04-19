import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class HttpDataService {
  constructor(private http:Http) {}

  //An observable is an async method, works like a promise
  getHttpData = (url:string): Observable<Response> => {
      return this.http.get(url)
          .map(res => res.json());
  }
}