import { Component, ViewChild } from '@angular/core';
import { ViewchildComponent } from '../viewchild/viewchild.component';
import { ComponentRelationService } from '../../practice-services/components-relation-service/component-relation.service';


@Component({
  selector: 'app-main-component-relation',
  templateUrl: './main-component-relation.component.html',
  styleUrls: ['./main-component-relation.component.css']
})
export class MainComponentRelationComponent {

  @ViewChild(ViewchildComponent, { static: true })
  private viewChild: ViewchildComponent;

  public clicks = 0;

  constructor(private componentRelation: ComponentRelationService) { }

  public inputValue = 'WoW, Input!';
  public inputArray = [1, 2, 3, 4, 5];

  getClicks( received_clicks ) {
    this.clicks = received_clicks;
  }

  moreClicks() {
    this.viewChild.moreClicks();
  }

  lessClicks() {
    this.viewChild.lessClicks();
  }

  throwValue(value) {
    this.componentRelation.setSubject(value);
  }
}

