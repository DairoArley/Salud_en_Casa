import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css']
})
export class InputPasswordComponent {

  @Input() valor:String;
}