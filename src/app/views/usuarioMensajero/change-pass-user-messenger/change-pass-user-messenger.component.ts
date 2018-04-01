import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { changePass } from '../../../models/changePass.model'
import { AuthenticationService } from '../../../services/authentication.service';
import { userMessengerService } from '../../../services/userMessenger.service';
import { SessionStorageService } from 'ngx-webstorage';
import {Config} from '../../../config';

@Component({
  selector: 'app-change-pass-user-messenger',
  templateUrl: './change-pass-user-messenger.component.html',
  styleUrls: ['./change-pass-user-messenger.component.css']
})
export class ChangePassUserMessengerComponent implements OnInit {

  url = Config.API_SERVER_CHANGEPASS_USERMESSENGER;
  changePass = new changePass();
  constructor(public _authenticationService: AuthenticationService, public _userMessengerService : userMessengerService,
    private _router : Router, public _locker  :SessionStorageService) { }

  ngOnInit() {

  }

  changePassword(changePass: changePass) {
    changePass = this.changePass;
    if (this._authenticationService.isLoggedIn() !== "") {
      this._userMessengerService.onChangePass(this.url, changePass).subscribe(
        res => {
          this._router.navigate(['/homeUserMessenger']);
        })
    }
  }

}
