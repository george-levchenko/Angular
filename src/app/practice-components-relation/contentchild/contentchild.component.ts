import {Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-contentchild',
  templateUrl: './contentchild.component.html',
  styleUrls: ['./contentchild.component.css']
})
export class ContentchildComponent {

  @ContentChild('headerContent')
  header: ElementRef;

  constructor() { }

  changeText() {
    this.header.nativeElement.textContent = 'F*ck you, parent!';
  }

}
