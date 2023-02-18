import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
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

  ngOnInit() {
  }

}

class PropertyCardElement{
  imagenPath:string = "";
  titulo:string = "";
}
