import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { changePass } from '../../../models/changePass.model'
import { AuthenticationService } from '../../../services/authentication.service';
import { clientService } from '../../../services/client.service';

import { SessionStorageService } from 'ngx-webstorage';
import {Config} from '../../../config';

@Component({
  selector: 'app-change-pass-client',
  templateUrl: './change-pass-client.component.html',
  styleUrls: ['./change-pass-client.component.css']
})
export class ChangePassClientComponent implements OnInit {
  url = Config.API_SERVER_CHANGEPASS_CLIENT;
  changePass = new changePass();
  constructor(public _authenticationService: AuthenticationService, public _clientService : clientService,
    private _router : Router, public _locker  :SessionStorageService) { }

  ngOnInit() {

  }

  changePassword(changePass: changePass) {
    changePass = this.changePass;
    if (this._authenticationService.isLoggedIn() !== "") {
      this._clientService.onChangePass(this.url, changePass).subscribe(
        res => {
          this._router.navigate(['/homeClient']);
        })
    }
  }

}
