import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';

import { userAdmin  } from '../models/userAdmin.model';

import { changePass  } from '../models/changePass.model';
import { HttpService } from './http.service';
import { Config } from '../config';
import { Tracking } from '../models/tracking.model';

@Injectable()
export class userAdminService extends HttpService{

	url = Config.API_SERVER_USERADMIN
	link = Config.API_SERVER_TRACKING
	link2 = Config.API_SERVER_TRACKING_ONLY
	constructor(public _http: Http){
		super(_http)
	}

	getAllUserAdmin() : Observable<Array<userAdmin>>{
		return this.get(this.url);
	}
	
	getAlltracking() : Observable<Array<Tracking>>{
		return this.get(this.link);
	}

	getOnlytracking(tracking :Tracking) : Observable<Array<Tracking>>{
		return this.post(this.link2, tracking);
	}

	onSaveUserAdmin(userAdmin : userAdmin){
		return this.post(this.url, userAdmin)				
	}

	onChangePass(url, changePass : changePass){
        return this.post(url, changePass)				
	}

	

}   