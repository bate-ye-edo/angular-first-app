import { Component, OnInit } from '@angular/core';
import { PropertyCardElement } from '../../property-card/property-card/property-card.component';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  propertyArr:Array<PropertyCardElement> =
  [
    <PropertyCardElement>{
      imagenPath:"../../../../assets/img/github-iswad.png",
      titulo:"Un titulo"
    },
    <PropertyCardElement>{
      imagenPath:"../../../../assets/img/github-iswad.png",
      titulo:"Otro titulo"
    },
    <PropertyCardElement>{
      imagenPath:"../../../../assets/img/github-iswad.png",
      titulo:"Otro titulo"
    },
    <PropertyCardElement>{
      imagenPath:"../../../../assets/img/github-iswad.png",
      titulo:"Otro titulo"
    },
    <PropertyCardElement>{
      imagenPath:"../../../../assets/img/github-iswad.png",
      titulo:"Otro titulo"
    },
    <PropertyCardElement>{
      imagenPath:"../../../../assets/img/github-iswad.png",
      titulo:"Otro titulo"
    }
  ];
  constructor() {

  }

}
