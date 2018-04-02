import { Component, OnInit } from '@angular/core';
import { medicamentService } from '../../../services/medicament.service';
import { medicament } from  '../../../models/medicament.model';
import { Router } from '@angular/router';
import {ModifyMedicamentComponent} from '../modify-medicament/modify-medicament.component';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthenticationService } from '../../../services/authentication.service';
import { userAdminService } from '../../../services/userAdmin.service';
import { SessionStorageService } from 'ngx-webstorage';
import {Config} from '../../../config';
import {ResultSearchComponent} from '../result-search/result-search.component';


@Component({
  selector: 'app-list-medicaments',
  templateUrl: './list-medicaments.component.html',
  styleUrls: ['./list-medicaments.component.css']
})
export class ListMedicamentsComponent implements OnInit {
  medicament: Array<medicament>;
	options = [
		{value: 'Niños', option: 'Niños'},
		{value: 'Mamás', option: 'Mamás'},
		{value: 'Adultos', option: 'Adultos'},
		{value: 'Pomadas', option: 'Pomadas'},
		{value: 'Pastillas', option: 'Pastillas'},
		{value: 'Jarabes', option: 'Jarabes'}
	];
	
	medi =  new medicament();;

	constructor(private _medicamentService: medicamentService, 
		public _modifyMedicament :  ModifyMedicamentComponent,
		private _router : Router, public _locker  :SessionStorageService,
	public _authenticationService : AuthenticationService, 
public _resultSerach : ResultSearchComponent) {}

  ngOnInit() {
		this.getAllMedicaments();
	}
	getAllMedicaments()	 {
		this._medicamentService.getAllmedicaments().subscribe(
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
	
	DeleteMedicament(med :medicament){

		console.log(med)
		this._medicamentService.onDeleteMedicament(med).subscribe(data => {
			//this._router.navigate(['/item']);
		})
		this.getAllMedicaments();
		//this._router.navigate(['/items']); //que lo lleve al componmente de verificar borrado
	}

	modifyMedicament(med : medicament){
	 	this._modifyMedicament.modifyMedicament(med);
		this._router.navigate(['/modifyMedicament']);
	}

	
	

	FindByMed(medicament : medicament){
		medicament = this.medi;
		console.log(medicament);
	
		this._resultSerach.resultSearch(medicament);
	}

}
