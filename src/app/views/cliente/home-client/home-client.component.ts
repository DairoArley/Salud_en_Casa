import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit {

  constructor(private _router: Router, public _authenticationServices : AuthenticationService) { }

  ngOnInit() {
  }
  logout() {
    this._authenticationServices.singOut();
  }

}
