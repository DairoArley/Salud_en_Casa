import { Component, OnInit } from '@angular/core';
import { medicamentService } from '../../../services/medicament.service'
import { medicament } from  '../../../models/medicament.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-register-medicaments',
  templateUrl: './register-medicaments.component.html',
  styleUrls: ['./register-medicaments.component.css']
})
export class RegisterMedicamentsComponent implements OnInit {

  medicament = new medicament();
  photos = new Array();
  options = [
		{value: 'Niños', option: 'Niños'},
		{value: 'Mamás', option: 'Mamás'},
		{value: 'Adultos', option: 'Adultos'},
		{value: 'Pomadas', option: 'Pomadas'},
		{value: 'Pastillas', option: 'Pastillas'},
		{value: 'Jarabes', option: 'Jarabes'}
	];
  constructor(private _medicamentService:medicamentService, 
    private _router : Router) { }
  ngOnInit() {
    
  }
  addPhoto(photos : any){
    
    this.photos.push({"photo1" :photos });
    console.log(this.photos);
    this.medicament.photos ="";
  }

 saveMedicament(medicament: medicament) {
    medicament = this.medicament;
    medicament.photos = this.photos;
      this._medicamentService.onSaveMedicament(medicament).subscribe(
        res => {
          this._router.navigate(['/listMedicament']);
        })
    
  
   




  }   

}
