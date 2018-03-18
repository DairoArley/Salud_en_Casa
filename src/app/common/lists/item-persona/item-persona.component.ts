import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'item-persona',
  templateUrl: './item-persona.component.html',
  styleUrls: ['./item-persona.component.css']
})
export class ItemPersonaComponent implements OnInit {
  nombre:String;
  apellido:String;
  cedula:number;
  ciudad:String;
  constructor() { 
    this.nombre ="Juan";
    this.apellido ="Perez";
    this.cedula=666666;
    this.ciudad="Medellin";
  }

  ngOnInit() {
  }

}
