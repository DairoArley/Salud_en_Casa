import { Component, OnInit } from '@angular/core';
import { purchaseService } from '../../../services/purchase.service';
import { purchase } from  '../../../models/purchase.model';
import { Router } from '@angular/router';
import { Tracking } from '../../../models/tracking.model';
import { userMessengerService } from '../../../services/userMessenger.service';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-list-purchase',
  templateUrl: './list-purchase.component.html',
  styleUrls: ['./list-purchase.component.css']
})
export class ListPurchaseComponent implements OnInit {
	purchase: Array<purchase>;
	medicaments : Array<any>
	tra = new Tracking();
  constructor(private _purchaseService: purchaseService, 
		private _router : Router, private _messengerServices: userMessengerService, 
		public _locker: SessionStorageService) { }

  ngOnInit() {
		this.getAllPurchase();
	}
	getAllPurchase() {
		this._purchaseService.getAllPurchase().subscribe(
			(data: purchase[]) => {
				this.purchase = data;
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
	
	atender(user: string, value :number){
		this.tra.user = user;
		this.tra.value = value;
		const messenger = this._locker.retrieve('user');
		this.tra.messenger = messenger.user;
		this.tra.img = "https://articles-images.sftcdn.net/wp-content/uploads/sites/2/2014/01/routedrag.gif"
		console.log(this.tra);
		
		this._messengerServices.onAtender(this.tra).subscribe(
			res => {
				location.reload();

				
			})	}

}
