import { Component, OnInit } from '@angular/core';
import {MainComponentRelationComponent} from '../main-component-relation/main-component-relation.component';

@Component({
  selector: 'app-constructor-relation',
  templateUrl: './constructor-relation.component.html',
  styleUrls: ['./constructor-relation.component.css']
})
export class ConstructorRelationComponent implements OnInit{

  private inputVariable: string;
  private inputArray: number[];

  constructor( private parent: MainComponentRelationComponent,
  ) { }

ngOnInit(): void {
  this.inputVariable = this.parent.inputValue;
  this.inputArray = this.parent.inputArray;
}


}
