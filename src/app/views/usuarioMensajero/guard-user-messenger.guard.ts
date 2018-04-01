import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthenticationService} from '../../services/authentication.service';


@Injectable()
export class GuardUserMessengerGuard implements CanActivate {
  constructor(public _authenticationServices: AuthenticationService, public _router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (this._authenticationServices.isLoggedIn() !== "") {
        if (this._authenticationServices.isLoggedIn() === "messengerUser") {
          return true;
        } else {
          console.log("acceso denegado")
          this._router.navigate(['/home']);
          return false;
        }
      } else {
        console.log("acceso denegado")
        this._router.navigate(['/home']);
      return false;
    }
  }
}
