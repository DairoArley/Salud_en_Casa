import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'item-medicamento',
  templateUrl: './item-medicamento.component.html',
  styleUrls: ['./item-medicamento.component.css']
})
export class ItemMedicamentoComponent implements OnInit {
  id:number;
  nombre:String;
  valorunidad:number;
  unidadesdisponibles:number;
  constructor() { 
    this.id =5555;
    this.nombre ="Perez";
    this.valorunidad=555;
    this.unidadesdisponibles=5;
  }
  ngOnInit() {
  }

}
