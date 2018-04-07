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
	showErrorMessage = false;
	errorMessage = '';

  medicament: Array<medicament>;
	med: Array<medicament>;
	medicamento = new Array() 
  med1 = new purchase();
	medicamentPurchse = new medicament();
	
	urlName = Config.API_SERVER_FINDBYNAME;
  urlPurchase = Config.API_SERVER_PURCHASE;
	urlCat = Config.API_SERVER_FINDBYCATEGORY;

	search = false;
	info = false;
	home = true;
	buy = false;
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
				this.search = false;
				this.info = false;
				this.home = true;

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
				this.search  =true;
				this.home = false;
				this.info = false;
				if(this.medicament.length == 0){
						this.showErrorMessage = true;
						this.search  =true;
						this.home = false;
						this.info = false;
						this.errorMessage = "No existen medicamentos con estas caracteristicas";
				}
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
				this.search  =true;
				this.home = false;
				this.info = false;
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
		medicament.quantity = 1;
		this.medicamento.push(medicament)
		console.log("Medicamento añadido");
		
		this.ngOnInit();
		console.log(this.medicamento);
		
		
	}
	
	removeMedicament(medicament : medicament, i){

		this.medicamento.splice(i,1);
		console.log(this.medicamento)
		console.log("Medicamento borrado");
		
	}

  buyMedicament(){
    this.userSesion = this._locker.retrieve('user');
		this.user = this.userSesion.user;
    this.med1.nameUser = this.user;
		this.med1.medicaments = this.medicamento;
		console.log(this.med1);
		
    if (this._authenticationService.isLoggedIn() !== "") {
      this._purchaseService.onSavePurchase(this.med1).subscribe(
        res => {
          window.location.href = "https://www.payulatam.com/co/";
					
        })
      
		}

	}

	back(){
		this.search = false;
		this.info = false;
		this.home = true;
		this.buy = false;
		this.ngOnInit();
	}

  showInfoSearch(medicament : medicament){
		if (this._authenticationService.isLoggedIn() !== "") {
			this._medicamentService.onFindByName(this.urlName, medicament).subscribe(
			    (data: medicament[]) => {
				this.medicament = data;
				this.search  =false;
				this.home = false;
				this.info = true;
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

	showInfoHome(medicament : medicament){
		console.log("entre");
		
		if (this._authenticationService.isLoggedIn() !== "") {
			this._medicamentService.onFindByName(this.urlName, medicament).subscribe(
			    (data: medicament[]) => {
				this.medicament = data;
				this.search  =false;
				this.buy = false;
				this.home = false;
				this.info = true;
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

	showProducts(){
		let i = 0;
		while(i<this.medicamento.length){
			if (this._authenticationService.isLoggedIn() !== "") {
				this._medicamentService.onFindByName(this.urlName, this.medicamento[i]).subscribe(
						(data: medicament[]) => {
					this.medicament = data;
				
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
			i = i +1;
		}
		this.search  =false;
		this.home = false;
		this.info = false;
		this.buy = true;
		
	}


}
