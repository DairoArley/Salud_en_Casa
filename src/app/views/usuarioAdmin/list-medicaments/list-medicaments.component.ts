import { Component, OnInit } from '@angular/core';
import { medicamentService } from '../../../services/medicament.service';
import { medicament } from '../../../models/medicament.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthenticationService } from '../../../services/authentication.service';
import { userAdminService } from '../../../services/userAdmin.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Config } from '../../../config';


@Component({
	selector: 'app-list-medicaments',
	templateUrl: './list-medicaments.component.html',
	styleUrls: ['./list-medicaments.component.css']
})
export class ListMedicamentsComponent implements OnInit {

	medicament: Array<medicament>;
	urlName = Config.API_SERVER_FINDBYNAME;
	urlModify = Config.API_SERVER_MODIFY_MEDICAMENT;

	urlCat = Config.API_SERVER_FINDBYCATEGORY;
	search = false;
	modify = false;
	home = true;

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
		public _authenticationService: AuthenticationService) { }

	ngOnInit() {
		this.search = false;
		this.modify = false;
		this.home = true;
		this.getAllMedicaments();
	}

	getAllMedicaments() {
		this._medicamentService.getAllmedicaments().subscribe(
			(data: medicament[]) => {
				this.medicament = data;
				this.search = false;
					this.modify = false;
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

	DeleteMedicament(med: medicament) {

		console.log(med)
		this._medicamentService.onDeleteMedicament(med).subscribe(data => {
			//this._router.navigate(['/item']);
		})
		this.getAllMedicaments();
		//this._router.navigate(['/items']); //que lo lleve al componmente de verificar borrado
	}


	FindByMed(medicament: medicament) {
		medicament = this.medi;
		if (this._authenticationService.isLoggedIn() !== "") {
			this._medicamentService.onFindByName(this.urlName, medicament).subscribe(
			    (data: medicament[]) => {
				this.medicament = data;
	  
				this.search = true;
				this.modify = false;
				this.home = false;
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
				this.search = true;
				this.modify = false;
				this.home = false;				
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

	ModifyMedicament(medicament :medicament){
		this.modify = true;
		this.home = false;
		this.search = false;
	  this.medic = medicament;
	 
	}

	updateMedicament(medicament :any){
		medicament =this.mediUpdate;
		medicament.medicament = this.medic.medicament;	


		const userSesion = this._locker.retrieve('user');
		this.userSesion = userSesion;
		this.user = this.userSesion.user;
		medicament.user = this.user;

			 this._medicamentService.onModifyMedicament(this.urlModify, medicament).subscribe(
				 res => {
					 this.getAllMedicaments();
					 this.modify = false;
					 this.search = false;
					 
				 })
	}

	back(){
		this.search = false;
		this.modify = false;
		this.home = true;
		this.ngOnInit();
	}


}
