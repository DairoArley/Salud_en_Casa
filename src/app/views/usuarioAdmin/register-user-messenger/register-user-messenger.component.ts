import { Component, OnInit } from '@angular/core';
import { userMessengerService } from '../../../services/userMessenger.service';
import { userMessenger } from '../../../models/userMessenger.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-register-user-messenger',
  templateUrl: './register-user-messenger.component.html',
  styleUrls: ['./register-user-messenger.component.css']
})
export class RegisterUserMessengerComponent implements OnInit {
  userMessenger = new userMessenger();
 
   
  constructor(private _userMessengerService: userMessengerService, 
    private _router : Router) { }
  
    ngOnInit() {
    }
    registerUserMessenger(userMessenger: userMessenger) {
      userMessenger = this.userMessenger;
      
  
        this._userMessengerService.onSaveUserMessenger(userMessenger).subscribe(
          res => {
            this._router.navigate(['/homeAdminUser']);
          })
      
    }   

}
