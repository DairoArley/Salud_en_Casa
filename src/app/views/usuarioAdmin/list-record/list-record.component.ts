import { Component, OnInit } from '@angular/core';
import { recordService } from '../../../services/record.service';
import { record } from  '../../../models/record.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-record',
  templateUrl: './list-record.component.html',
  styleUrls: ['./list-record.component.css']
})
export class ListRecordComponent implements OnInit {
  record: Array<record>;
  constructor(private _recordService: recordService, 
    private _router : Router) { }

  ngOnInit() {
		this.getAllClients();
	}
	getAllClients() {
		this._recordService.getAllrecord().subscribe(
			(data: record[]) => {
        this.record = data;
        console.log(data);
        
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
