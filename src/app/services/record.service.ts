import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';

import { record  } from '../models/record.model';

import { HttpService } from './http.service';
import { Config } from '../config';

@Injectable()
export class recordService extends HttpService{

	url = Config.API_SERVER_RECORD;
	constructor(public _http: Http){
		super(_http)
	}

	getAllrecord() : Observable<Array<record>>{
		return this.get(this.url);
	}

	

	

	

}   