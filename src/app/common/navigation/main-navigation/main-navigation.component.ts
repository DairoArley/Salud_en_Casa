import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent  implements OnInit {

  client = false;
  messenger = false;
  admin = false;

  constructor(public _authenticationServices: AuthenticationService) {
   }

  ngOnInit() {
    if (this._authenticationServices.isLoggedIn() !== "") {
      if (this._authenticationServices.isLoggedIn() === "adminUser") {
        this.admin = true;
        this.client = false;
        this.messenger = false;
      } else if (this._authenticationServices.isLoggedIn() === "messengerUser") {
        this.admin = false;
        this.client = false;
        this.messenger = true;
      } else if (this._authenticationServices.isLoggedIn() === "client") {
        this.admin = false;
        this.client = true;
        this.messenger = false;
      } 
    }
  }
  logout() {
    this._authenticationServices.singOut();
  }
}
 


