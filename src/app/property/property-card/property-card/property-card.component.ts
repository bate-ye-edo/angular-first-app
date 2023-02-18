import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  title:string;
  imgPath:string;
  constructor() {
    this.title = "mi titulo";
    this.imgPath = '../../../../assets/img/github-iswad.png';
  }

  ngOnInit() {
  }

}