import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.css']
})
export class InputRadioComponent {

  @Input() valor:String;
}
