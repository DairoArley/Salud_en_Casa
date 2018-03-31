import { Component, OnInit } from '@angular/core';
import { medicamentService } from '../../../services/medicament.service';
import { medicament } from  '../../../models/medicament.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-medicaments',
  templateUrl: './list-medicaments.component.html',
  styleUrls: ['./list-medicaments.component.css']
})
export class ListMedicamentsComponent implements OnInit {
  medicament: Array<medicament>;
  photos: Array<any>;

  constructor(private _medicamentService: medicamentService, 
    private _router : Router) { }

  ngOnInit() {
		this.getAllMedicaments();
	}
	getAllMedicaments() {
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

}
