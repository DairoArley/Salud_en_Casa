import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../config';
import { HttpService } from './http.service';
import { SessionStorageService } from 'ngx-webstorage';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';

import { User } from '../models/user.model';

@Injectable()
export class AuthenticationService {

    hasSession = "";
	user;

	constructor(private _http: HttpService, public _locker: SessionStorageService) {
	}

	public isLoggedIn() {
		const user = this._locker.retrieve('user');
		if (!!user) {
            this.user = user;
        	this.hasSession = this.user.job;  
		}
		return this.hasSession;
	}


	public SingIn(url, username: string, password: string) {
		return this._http.post(url, {
			'user': username,
			'password': password
		});
	}


	public singOut() {
		this.user = null;
		this.hasSession = "";
		this._locker.clear('user');
	}
}   