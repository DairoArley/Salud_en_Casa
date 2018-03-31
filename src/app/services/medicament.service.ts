import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';

import { medicament  } from '../models/medicament.model';
import { HttpService } from './http.service';
import { Config } from '../config';

@Injectable()
export class medicamentService extends HttpService{
	constructor(public _http: Http){
		super(_http)
	}

	getAllmedicaments() : Observable<Array<medicament>>{
		const url = Config.API_SERVER_MEDICAMENT

		return this.get(url);
	}

	onSaveclient(medicament : medicament){
		const url = Config.API_SERVER_MEDICAMENT;
        return this.post(url, medicament)				
	}
/*
	onDeleteImplement(implement :Implement){
		const url = Config.API_SERVER_ITEMS+"/"+implement.typeImplement;
		const token = this._authenticactionServices.user.api_token;
            return this.delete(url, token);			
	}*/
}   