import { Component, OnInit } from '@angular/core';
import { purchaseService } from '../../../services/purchase.service';
import { purchase } from  '../../../models/purchase.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-purchase',
  templateUrl: './list-purchase.component.html',
  styleUrls: ['./list-purchase.component.css']
})
export class ListPurchaseComponent implements OnInit {

  purchase: Array<purchase>;
  constructor(private _purchaseService: purchaseService, 
    private _router : Router) { }

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

}
