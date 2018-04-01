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

@Injectable()
export class userAdminService extends HttpService{

	url = Config.API_SERVER_USERADMIN
	constructor(public _http: Http){
		super(_http)
	}

	getAllclient() : Observable<Array<userAdmin>>{
		return this.get(this.url);
	}

	onSaveclient(userAdmin : userAdmin){
		return this.post(this.url, userAdmin)				
	}

	onChangePass(url, changePass : changePass){
        return this.post(url, changePass)				
	}

	

}   