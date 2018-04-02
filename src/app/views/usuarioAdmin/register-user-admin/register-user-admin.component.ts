import { Component, OnInit } from '@angular/core';
import { userAdminService } from '../../../services/userAdmin.service';
import { userAdmin } from '../../../models/userAdmin.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-register-user-admin',
  templateUrl: './register-user-admin.component.html',
  styleUrls: ['./register-user-admin.component.css']
})
export class RegisterUserAdminComponent implements OnInit {
  userAdmin = new userAdmin();
 
   
  constructor(private _userAdminService: userAdminService, 
    private _router : Router) { }
  
    ngOnInit() {
    }
    registerUserAdmin(userAdmin: userAdmin) {
      userAdmin = this.userAdmin;
      
  
        this._userAdminService.onSaveUserAdmin(userAdmin).subscribe(
          res => {
            this._router.navigate(['/homeAdminUser']);
          })
      
    }   
}
