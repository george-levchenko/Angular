import { Component, OnInit } from '@angular/core';
import {ComponentRelationService} from '../../practice-services/components-relation-service/component-relation.service';


@Component({
  selector: 'app-service-relation',
  templateUrl: './service-relation.component.html',
  styleUrls: ['./service-relation.component.css']
})
export class ServiceRelationComponent implements OnInit {

  catchValue: any;

  constructor(private componentRelation: ComponentRelationService) { }

  ngOnInit(): void {

    this.catchValue = this.componentRelation.getSubject();

  }

}
