import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {
  @Input() property:PropertyCardElement= new PropertyCardElement();
}

export class PropertyCardElement{
  imagenPath:string = "";
  titulo:string = "";
}
