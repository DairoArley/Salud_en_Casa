import { Component, OnInit } from '@angular/core';
import { medicamentService } from '../../../services/medicament.service';
import { medicament } from  '../../../models/medicament.model';
import { Router } from '@angular/router';
import {Config} from '../../../config';

@Component({
  selector: 'app-modify-medicament',
  templateUrl: './modify-medicament.component.html',
  styleUrls: ['./modify-medicament.component.css']
})
export class ModifyMedicamentComponent implements OnInit {
  medicament = new medicament();
  url = Config.API_SERVER_MODIFY_MEDICAMENT;
  actualMedicament: Array<medicament>;
  user;


  constructor(private _medicamentService: medicamentService, 
    private _router : Router) { }

  ngOnInit() {
  }
  modifyMedicament(med:medicament){
    //this.actualMedicament = med;
    console.log(this.actualMedicament);
    
    //this._medicamentService.onModifyMedicament(this.url, med).subscribe(data=>{ })

  }

  saveModifyMedicament(medi :medicament){
    medi = this.medicament;
       this._medicamentService.onModifyMedicament(this.url, medi).subscribe(
         res => {
           this._router.navigate(['/listMedicament']);
         })
 
  }


}
