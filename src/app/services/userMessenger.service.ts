import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';

import { userMessenger  } from '../models/userMessenger.model';

import { changePass  } from '../models/changePass.model';
import { HttpService } from './http.service';
import { Config } from '../config';
import { Tracking } from '../models/tracking.model';

@Injectable()
export class userMessengerService extends HttpService{

	url = Config.API_SERVER_USERMESSENGER;
	constructor(public _http: Http){
		super(_http)
	}

	getAllUserMessenger() : Observable<Array<userMessenger>>{
		return this.get(this.url);
	}

	onSaveUserMessenger(userMessenger : userMessenger){
		return this.post(this.url, userMessenger)				
	}

	onChangePass(url, changePass : changePass){
        return this.post(url, changePass)				
	}

	onAtender(tracking : Tracking){
		let link = Config.API_SERVER_TRACKING
        return this.post(link, tracking)				
	}

	

}   