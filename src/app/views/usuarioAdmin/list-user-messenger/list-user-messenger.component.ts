import { Component, OnInit } from '@angular/core';
import { userMessengerService } from '../../../services/userMessenger.service';
import { userMessenger } from  '../../../models/userMessenger.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-user-messenger',
  templateUrl: './list-user-messenger.component.html',
  styleUrls: ['./list-user-messenger.component.css']
})
export class ListUserMessengerComponent implements OnInit {
  userMessenger: Array<userMessenger>;
  constructor(private _userMessengerService: userMessengerService, 
    private _router : Router) { }

  ngOnInit() {
		this.getAllUserMessenger();
	}
	getAllUserMessenger() {
		this._userMessengerService.getAllUserMessenger().subscribe(
			(data: userMessenger[]) => {
				this.userMessenger = data;
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
