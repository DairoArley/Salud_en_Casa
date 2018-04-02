import { Component, OnInit } from '@angular/core';
import { medicamentService } from '../../../services/medicament.service';
import { medicament } from '../../../models/medicament.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthenticationService } from '../../../services/authentication.service';
import { userAdminService } from '../../../services/userAdmin.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Config } from '../../../config';
import { purchase } from '../../../models/purchase.model';
import { purchaseService } from '../../../services/purchase.service';


@Component({
  selector: 'app-list-medicaments-client',
  templateUrl: './list-medicaments-client.component.html',
  styleUrls: ['./list-medicaments-client.component.css']
})
export class ListMedicamentsClientComponent implements OnInit {
  medicament: Array<medicament>;
  med: Array<medicament>;
  med1 = new purchase;;
  medicamentPurchse = new medicament();
	urlName = Config.API_SERVER_FINDBYNAME;
  urlPurchase = Config.API_SERVER_PURCHASE;
	urlCat = Config.API_SERVER_FINDBYCATEGORY;
	search = true;
	userSesion;
	user;

	options = [
		{ value: 'Niños', option: 'Niños' },
		{ value: 'Mamás', option: 'Mamás' },
		{ value: 'Adultos', option: 'Adultos' },
		{ value: 'Pomadas', option: 'Pomadas' },
		{ value: 'Pastillas', option: 'Pastillas' },
		{ value: 'Jarabes', option: 'Jarabes' }
	];
	mediUpdate = new medicament();
	medi = new medicament();
	medic = new medicament();
	constructor(private _medicamentService: medicamentService,
		private _router: Router, public _locker: SessionStorageService,
    public _authenticationService: AuthenticationService,
    public _purchaseService :purchaseService) { }

	ngOnInit() {
		this.getAllMedicaments();
	}
	getAllMedicaments() {
		this._medicamentService.getAllmedicaments().subscribe(
			(data: medicament[]) => {
				this.medicament = data;
				this.search = true;

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
  
  FindByMed(medicament: medicament) {
		medicament = this.medi;
		if (this._authenticationService.isLoggedIn() !== "") {
			this._medicamentService.onFindByName(this.urlName, medicament).subscribe(
			    (data: medicament[]) => {
				this.medicament = data;
	  
				this.search = false;
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

	FindByCat(medicament: medicament) {
		medicament = this.medi;
		if (this._authenticationService.isLoggedIn() !== "") {
			this._medicamentService.onFindByCat(this.urlCat, medicament).subscribe(
			    (data: medicament[]) => {
				this.medicament = data;
	  
				this.search = false;
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


  
  addMedicament(medicament : medicament){ 
    this.search =true;
    this.med.push(medicament);
 
  }
  buyMedicament(){
    const userSesion = this._locker.retrieve('user');
		this.userSesion = userSesion;
		this.user = this.userSesion.user;
    this.med1.nameUser = this.user;
    this.med1.medicaments = this.med;
    if (this._authenticationService.isLoggedIn() !== "") {
      this._purchaseService.onSavePurchase(this.med1).subscribe(
        res => {
          this.getAllMedicaments();
          this.search = true;
          
        })
      
		}

  }
  


}
