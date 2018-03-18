import {Component,Input} from '@angular/core';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'boton',
  templateUrl: 'boton.component.html',
  styleUrls: ['boton.component.css'],
})
export class Boton {

  @Input() etiqueta:String;
}

