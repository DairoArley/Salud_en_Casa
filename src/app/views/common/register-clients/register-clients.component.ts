import { Component, OnInit } from '@angular/core';
import { clientService } from '../../../services/client.service';
import { client } from '../../../models/client.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-register-clients',
  templateUrl: './register-clients.component.html',
  styleUrls: ['./register-clients.component.css']
})
export class RegisterClientsComponent implements OnInit {
client = new client();
options = [
  {value: 'Femenino', option: 'Femenino'},
  {value: 'Masculino', option: 'Masculino'},
  {value: 'Otro', option: 'Otro'}
];
 
constructor(private _clientService: clientService, 
  private _router : Router) { }

  ngOnInit() {
  }

  registerClient(cli: client) {
    cli = this.client;
    console.log(cli);
    

      this._clientService.onSaveclient(cli).subscribe(
        res => {
          this._router.navigate(['/change-password']);
        })
    
  }   
}





