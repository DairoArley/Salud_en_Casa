import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'item-servicio',
  templateUrl: './item-servicio.component.html',
  styleUrls: ['./item-servicio.component.css']
})
export class ItemServicioComponent implements OnInit {

  id:number;
  usuario:String;
  medico:String;
  ciudad:String;
  constructor() { 
    this.id =5555;
    this.usuario ="Perez";
    this.medico="Camilo";
    this.ciudad="Medellin";
  }

  ngOnInit() {
  }

}
