import { Component, OnInit } from '@angular/core';
import { PropertyCardElement } from '../../property-card/property-card/property-card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  propertyArr:Array<PropertyCardElement>;
  constructor(private httpClient:HttpClient) {
    this.propertyArr = new Array<PropertyCardElement>();
    this.httpClient.get('data/properties.json').subscribe(data=>{
      for(let obj of JSON.parse(JSON.stringify(data))["PropertyCardElements"]){
        this.propertyArr.push(new PropertyCardElement(obj));
      }
    });
  }
}
