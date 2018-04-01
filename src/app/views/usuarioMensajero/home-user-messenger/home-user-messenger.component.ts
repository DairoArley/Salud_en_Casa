import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-home-user-messenger',
  templateUrl: './home-user-messenger.component.html',
  styleUrls: ['./home-user-messenger.component.css']
})
export class HomeUserMessengerComponent implements OnInit {

  constructor(private _router: Router, public _authenticationServices : AuthenticationService) { }

  ngOnInit() {
  }
  logout() {
    this._authenticationServices.singOut();
  }


}
