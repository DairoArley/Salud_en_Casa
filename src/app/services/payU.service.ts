import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';

import { payment } from '../models/payment.model';
import { HttpService } from './http.service';
import { Config } from '../config';

@Injectable()
export class payUService extends HttpService {
	constructor(public _http: Http) {
		super(_http)
	}

	verify(payment : any): Observable<Array<payment>> {
		const url = Config.API_PAYU;
	
		
		return this.postPayU(url, payment);		
	}


	
}   