import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';

import { client  } from '../models/client.model';
import { HttpService } from './http.service';
import { Config } from '../config';

@Injectable()
export class clientService extends HttpService{
	constructor(public _http: Http){
		super(_http)
	}

	getAllclient() : Observable<Array<client>>{
		const url = Config.API_SERVER_CLIENTS

		return this.get(url);
	}

	onSaveclient(client : client){
		const url = Config.API_SERVER_CLIENTS;
        return this.post(url, client)				
	}
/*
	onDeleteImplement(implement :Implement){
		const url = Config.API_SERVER_ITEMS+"/"+implement.typeImplement;
		const token = this._authenticactionServices.user.api_token;
            return this.delete(url, token);			
	}*/
}   