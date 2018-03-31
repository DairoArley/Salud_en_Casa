import { Component, OnInit } from '@angular/core';
import { clientService } from '../../../services/client.service';
import { client } from  '../../../models/client.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
  client: Array<client>;
  constructor(private _clientService: clientService, 
    private _router : Router) { }

  ngOnInit() {
		this.getAllClients();
	}
	getAllClients() {
		this._clientService.getAllclient().subscribe(
			(data: client[]) => {
				this.client = data;
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
