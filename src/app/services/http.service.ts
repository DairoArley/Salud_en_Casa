import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Config} from '../config';

@Injectable()
export class HttpService {
  constructor(public _http: Http) {
  }

  public get(url): Observable<any> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({headers: headers});
    return this._http.get(url, options).map(response => response.json());
  }

  public post(url, params): Observable<any> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    })
    const options = new RequestOptions({headers: headers});
    const body = JSON.stringify(params);
    console.log(body);
    
    return this._http.post(url, body, options).map(response => response.json());
  }

  public delete(url): Observable<any> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({headers: headers});
    return this._http.delete(url, options).map(response => response.json());
  }
  public postPayU(url, params): Observable<any> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin:': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Authorization, Origin, x-requested-with, Content-Type, Content-Range, Content-Disposition, Content-Description'
     
    })
    const options = new RequestOptions({headers: headers});
    const body = JSON.stringify(params);
    console.log(body);
    
    return this._http.post(url, body, options).map(response => response.json());
  }



} 