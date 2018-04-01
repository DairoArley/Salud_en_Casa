import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-home-admin-user',
  templateUrl: './home-admin-user.component.html',
  styleUrls: ['./home-admin-user.component.css']
})
export class HomeAdminUserComponent implements OnInit {

  constructor(private _router: Router, public _authenticationServices : AuthenticationService) { }

  ngOnInit() {
  }
  logout() {
    this._authenticationServices.singOut();
  }


}
