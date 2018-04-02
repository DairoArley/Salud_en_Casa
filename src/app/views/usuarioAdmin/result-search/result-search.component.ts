import { Component, OnInit } from '@angular/core';
import { medicamentService } from '../../../services/medicament.service';
import { medicament } from '../../../models/medicament.model';
import { Router } from '@angular/router';
import { ModifyMedicamentComponent } from '../modify-medicament/modify-medicament.component';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthenticationService } from '../../../services/authentication.service';
import { userAdminService } from '../../../services/userAdmin.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Config } from '../../../config';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})

export class ResultSearchComponent implements OnInit {
  medicament: Array<medicament>;
  url = Config.API_SERVER_FINDBYNAME;
  medic = new medicament();
  med = new medicament();
  constructor(private _medicamentService: medicamentService,
    public _modifyMedicament: ModifyMedicamentComponent,
    private _router: Router, public _locker: SessionStorageService,
    public _authenticationService: AuthenticationService) { }
  ngOnInit() {
    
  }

  
  resultSearch(medicament : medicament) {
    this.medic = medicament;
    console.log(this.medic);

    if (this._authenticationService.isLoggedIn() !== "") {
      this._medicamentService.onFindByName(this.url, this.medic).subscribe(
        
        (data: medicament[]) => {
          this.medicament = data;
          this.med = this.medicament[0];
          console.log(this.medicament);

          this._router.navigate(['/resultMedicament']);
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
}
