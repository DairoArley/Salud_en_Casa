import { Component, OnInit } from '@angular/core';
import { userAdminService } from '../../../services/userAdmin.service';
import { userAdmin } from  '../../../models/userAdmin.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-user-admin',
  templateUrl: './list-user-admin.component.html',
  styleUrls: ['./list-user-admin.component.css']
})
export class ListUserAdminComponent implements OnInit {
  userAdmin: Array<userAdmin>;
  constructor(private _userAdminService: userAdminService, 
    private _router : Router) { }

  ngOnInit() {
		this.getAllUserAdmin();
	}
	getAllUserAdmin() {
		this._userAdminService.getAllUserAdmin().subscribe(
			(data: userAdmin[]) => {
				this.userAdmin = data;
			},
			err => {
				console.log(err);
			},
			() => {
				//console.log('finished!');
				//console.log(this.implement);
			}
		);
  }
}
