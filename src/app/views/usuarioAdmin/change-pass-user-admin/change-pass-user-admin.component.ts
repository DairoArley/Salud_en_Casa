import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { changePass } from '../../../models/changePass.model'
import { AuthenticationService } from '../../../services/authentication.service';
import { userAdminService } from '../../../services/userAdmin.service';

import { SessionStorageService } from 'ngx-webstorage';
import {Config} from '../../../config';


@Component({
  selector: 'app-change-pass-user-admin',
  templateUrl: './change-pass-user-admin.component.html',
  styleUrls: ['./change-pass-user-admin.component.css']
})
export class ChangePassUserAdminComponent implements OnInit {
  url = Config.API_SERVER_CHANGEPASS_USERADMIN;
  changePass = new changePass();
  constructor(public _authenticationService: AuthenticationService, 
    public _userAdminService : userAdminService,
    private _router : Router, public _locker  :SessionStorageService) { }

  ngOnInit() {

  }

  changePassword(changePass: changePass) {
    changePass = this.changePass;
    if (this._authenticationService.isLoggedIn() !== "") {
      this._userAdminService.onChangePass(this.url, changePass).subscribe(
        res => {
          this._router.navigate(['/homeAdminUser']);
        })
    }
  }

}
