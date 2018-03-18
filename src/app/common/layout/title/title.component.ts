import { Component,Input } from '@angular/core';

@Component({
  selector: 'titulo',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

  @Input() valor:String;

  }
