import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tracking } from '../../../models/tracking.model';
import { SessionStorageService } from 'ngx-webstorage';
import { userAdminService } from '../../../services/userAdmin.service';

@Component({
  selector: 'app-tracking-domicilios',
  templateUrl: './tracking-domicilios.component.html',
  styleUrls: ['./tracking-domicilios.component.css']
})
export class TrackingDomiciliosComponent implements OnInit{
  home = true;
  info = false;
  tracking: Array<Tracking>;
  tracking2: Array<Tracking>;

  medicaments : Array<any>
	tra = new Tracking();
  constructor(private _router : Router, private _userAdminServices: userAdminService, 
		public _locker: SessionStorageService) { }

  ngOnInit() {
		this.getAllTracking();
	}
	getAllTracking() {
		this._userAdminServices.getAlltracking().subscribe(
			(data: Tracking[]) => {
				this.tracking = data;
			},
			err => {
				console.log(err);
			},
			() => {
				//console.log('finished!');
				//console.log(this.implement);
			}
		);
  }
  
  showInfo(tracking : Tracking){
		
			this._userAdminServices.getOnlytracking(tracking).subscribe(
			    (data: Tracking[]) => {
				this.info  =true;
				this.home = false;
        this.tracking2 = data;
			  },
			  err => {
				console.log(err);
			  },
			  () => {
				//console.log('finished!');
				//console.log(this.implement);
			  }
			);
			
  }
	
	back(){
		this.info = false;
		this.home = true;
		this.ngOnInit();
	}


}
	

