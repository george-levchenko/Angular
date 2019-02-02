import { Component } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent {

  public clicks = 0;

  constructor() { }

  moreClicks() {
    this.clicks++;
  }

  lessClicks() {
    this.clicks--;
  }

}
