import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent {

  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
   ];

}
