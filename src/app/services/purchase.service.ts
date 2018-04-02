import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';

import { purchase  } from '../models/purchase.model';

import { changePass  } from '../models/changePass.model';
import { HttpService } from './http.service';
import { Config } from '../config';

@Injectable()
export class purchaseService extends HttpService{

	url = Config.API_SERVER_PURCHASE;
	constructor(public _http: Http){
		super(_http)
	}

	getAllPurchase() : Observable<Array<purchase>>{
		return this.get(this.url);
	}

	onSavePurchase(purchase : purchase){
        return this.post(this.url, purchase)				
	}



	

}   