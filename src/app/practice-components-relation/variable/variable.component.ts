import { Component } from '@angular/core';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css']
})
export class VariableComponent {

  public clicks = 0;

  constructor() { }

  moreClicks() {
    this.clicks++;
  }

  lessClicks() {
    this.clicks--;
  }

}
