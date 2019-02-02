import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],
  // inputs: ['inputVariable'],  // The same as @Input
  // outputs: ['outputVariable'] // The same as @Output
})
export class InputOutputComponent {

  private _arrayValue = '';
  public clicks = 0;

  constructor() { }

  @Input() inputVariable: string;

  // @Input('inputVariable') input: string; // with alias

  @Input()
  set arrayValue(arrayValue: string[]) {
    this._arrayValue = arrayValue.join(',');
  }
  get arrayValue(): string[] {
    return this._arrayValue.split(',');
  }

  // @Output('outputVariable') output = new EventEmitter<number>(); // with alias

  @Output() outputVariable = new EventEmitter<number>();

  getClicks() {
    this.outputVariable.emit(++this.clicks);
  }

}
